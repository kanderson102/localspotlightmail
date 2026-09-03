"use client";

import React, { useState, useEffect, useRef } from "react";
import { campaignRoutes, CampaignRoute, PostcardSlot } from "../data/routes";
import { faqs } from "../data/faq";
import { testimonials } from "../data/testimonials";
import { townAverages, TownAverage, getTownAverage } from "../data/townAverages";

// Elegant Reveal component to fade-in items when they enter the viewport
function Reveal({
  children,
  className = "",
  variant = "bottom",
  delay = 0
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "bottom" | "left";
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const variantClass = variant === "left" ? "reveal-fade-left" : "reveal-fade-bottom";

  return (
    <div
      ref={ref}
      className={`${variantClass} ${isIntersecting ? "revealed" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function HomePage({ initialSlug }: { initialSlug?: string }) {
  const validSlugs = ["altamonte-springs", "lake-mary", "longwood", "sanford", "wekiva-springs"];

  // Active location campaign slug: default to initialSlug or altamonte-springs
  const [activeSlug, setActiveSlug] = useState<string>(() => {
    if (initialSlug && validSlugs.includes(initialSlug)) {
      return initialSlug;
    }
    return "altamonte-springs";
  });

  useEffect(() => {
    if (typeof window !== "undefined" && !initialSlug) {
      const path = window.location.pathname.replace(/^\//, "");
      if (validSlugs.includes(path)) {
        setActiveSlug(path);
      }
    }
  }, [initialSlug]);

  const activeCampaign = campaignRoutes.find((c) => c.slug === activeSlug) || campaignRoutes[0];
  const activeAverages = getTownAverage(activeSlug);

  // Postcard side preview toggle: "front" vs "back"
  const [activeSide, setActiveSide] = useState<"front" | "back">("front");

  // Pricing billing duration selection: "1mo", "3mo", "6mo", "12mo"
  const [billingPeriod, setBillingPeriod] = useState<"1mo" | "3mo" | "6mo" | "12mo">("1mo");

  // FAQ active index for accordion
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);

  // Mobile navigation hamburger state
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Contact Form Submission State
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    message: ""
  });

  // Sticky Navbar state
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update active route when campaign changes
  const handleLocationChange = (slug: string) => {
    setActiveSlug(slug);
    setActiveSide("front");
    if (typeof window !== "undefined") {
      window.history.pushState({}, "", `/${slug}`);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFaqToggle = (index: number) => {
    setActiveFaqIndex(activeFaqIndex === index ? null : index);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          town: activeCampaign.name,
          businessName: formData.businessName,
          contactName: formData.contactName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        })
      });

      if (res.ok) {
        setFormSubmitted(true);
      } else {
        const data = await res.json();
        setSubmitError(data.error || "Submission failed. Please try again.");
      }
    } catch (err) {
      setSubmitError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  // Calculate pricing discounts dynamically based on billing selection
  const getPeriodPrice = (basePrice: number) => {
    let multiplier = 1;
    if (billingPeriod === "3mo") multiplier = 0.95; // 5% off
    else if (billingPeriod === "6mo") multiplier = 0.90; // 10% off
    else if (billingPeriod === "12mo") multiplier = 0.80; // 20% off

    return Math.round(basePrice * multiplier);
  };

  // Calculate price per door dynamically
  const getPricePerDoor = (basePrice: number) => {
    const price = getPeriodPrice(basePrice);
    const cost = (price / activeAverages.doors) * 100;
    return Math.round(cost) + "¢";
  };

  // Return the billing duration months count
  const getPriceMonthsCount = () => {
    if (billingPeriod === "3mo") return 3;
    if (billingPeriod === "6mo") return 6;
    if (billingPeriod === "12mo") return 12;
    return 1;
  };

  // Contact Form Placeholder details based on campaign
  const getBusinessPlaceholder = () => {
    switch (activeSlug) {
      case "longwood": return "e.g. Longwood Roofer";
      case "wekiva-springs": return "e.g. Sweetwater Med Spa";
      case "lake-mary": return "e.g. Lake Mary Dental";
      case "sanford": return "e.g. Historic Sanford Cafe";
      case "altamonte-springs": return "e.g. Altamonte CPA";
      default: return "e.g. Local Services Co.";
    }
  };

  // Dynamic Postcard Preview Layout for the active campaign town:
  const cardSlotsLayout = activeCampaign.slots;

  // Derive Sold vs Available counts for display
  const totalSlotsCount = 16;
  const soldSlotsCount = cardSlotsLayout.reduce((acc, slot) => {
    let count = 0;
    if (slot.soldFront) count++;
    if (slot.soldBack) count++;
    return acc + count;
  }, 0);
  const availableSlotsCount = totalSlotsCount - soldSlotsCount;

  // Render price display with clear advance-billing or monthly payment agreement descriptors
  const renderPriceDisplay = (basePrice: number) => {
    const price = getPeriodPrice(basePrice);
    const costPerDoor = getPricePerDoor(basePrice);
    const monthsCount = getPriceMonthsCount();
    const totalCampaignSum = price * monthsCount;

    return (
      <div className="price-display" style={{ display: "flex", flexDirection: "column", gap: "4px", alignItems: "center", margin: "24px 0" }}>
        <span className="price-num" style={{ fontSize: "3rem", fontWeight: "800", color: "var(--primary)", lineHeight: "1" }}>
          ${price}{billingPeriod !== "1mo" && <span style={{ fontSize: "1.25rem", fontWeight: "600", color: "var(--primary-light)" }}>/mo</span>}
        </span>
        <span className="price-period" style={{ fontSize: "1rem", fontWeight: "600", color: "var(--accent)" }}>
          {costPerDoor} per door
        </span>
        {billingPeriod !== "1mo" ? (
          <span className="price-total" style={{ fontSize: "0.85rem", fontWeight: "500", color: "var(--primary-light)", marginTop: "2px" }}>
            (${totalCampaignSum.toLocaleString()} total upfront)
          </span>
        ) : (
          <span className="price-total" style={{ fontSize: "0.85rem", fontWeight: "500", color: "var(--primary-light)", marginTop: "2px" }}>
            (Single month campaign run)
          </span>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Centered Floating Header */}
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <a href="#" className="logo">
            {/* Logo magnifying glass symbol */}
            <svg className="logo-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <span>Local Spotlight Mail</span>
          </a>

          <nav className="nav-links">
            <a href="#what-we-do" className="nav-link">What We Do</a>
            <a href="#coverage" className="nav-link">Map</a>
            <a href="#postcard-preview" className="nav-link">Preview</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
            <a href="#faq" className="nav-link">FAQs</a>
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <a href="#contact" className="btn btn-outline-white btn-header-reserve" style={{ padding: "8px 24px", fontSize: "0.85rem", borderRadius: "9999px" }}>
              Reserve Your Spot
            </a>

            {/* Hamburger Button for Mobile View */}
            <button
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Navigation Overlay */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? "open" : ""}`}>
        <a href="#what-we-do" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>What We Do</a>
        <a href="#coverage" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>Map</a>
        <a href="#postcard-preview" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>Preview</a>
        <a href="#about" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>About</a>
        <a href="#contact" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        <a href="#faq" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>FAQs</a>
        {/* Reserve Button at bottom of other links on mobile */}
        <a
          href="#contact"
          className="btn btn-primary"
          style={{ width: "80%", maxHeight: "50px", marginTop: "16px", borderRadius: "9999px", textTransform: "uppercase", fontSize: "0.9rem", fontWeight: "700" }}
          onClick={() => setMobileMenuOpen(false)}
        >
          Reserve Your Spot
        </a>
      </div>

      {/* Hero Section with Dog Background (Left-aligned & Colorful photo) */}
      <section className="hero-section">
        <div className="hero-content-left">
          {/* CHOOSE YOUR LOCATION Segmented selector */}
          <Reveal variant="bottom" delay={0}>
            <div className="hero-choose-label">Choose Your Location</div>
          </Reveal>

          <Reveal variant="bottom" delay={80}>
            <div className="location-selector-wrap">
              <div className="location-selector">
                {campaignRoutes.map((c) => (
                  <button
                    key={c.slug}
                    className={`location-btn ${activeSlug === c.slug ? "active" : ""}`}
                    onClick={() => handleLocationChange(c.slug)}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal variant="bottom" delay={160}>
            <h1 className="hero-title">
              The {activeCampaign.name} <span>Spotlight</span>
            </h1>
          </Reveal>

          <Reveal variant="bottom" delay={240}>
            <p className="hero-subtitle">
              {activeCampaign.tagline}. Land directly on the kitchen counter of {activeAverages.doors.toLocaleString()} high-value local households on our premium {activeAverages.cardType || "9x12"}" shared co-op mailer.
            </p>
          </Reveal>

          <Reveal variant="bottom" delay={320}>
            <div className="hero-ctas">
              <a href="#contact" className="btn btn-primary">Reserve Your Spot →</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What We Do Section (Fades in from the left) */}
      <section className="section" id="what-we-do">
        <div className="container">
          <div className="explainer-grid">
            <Reveal variant="left" delay={0}>
              <div className="explainer-text">
                <h3>A Community-Focused Shared Advertising Campaign</h3>
                <p>
                  We design and mail a premium, double-sided {activeAverages.cardType || "9x12"}" full-color postcard to {activeAverages.doors.toLocaleString()} households in targeted {activeCampaign.city} neighborhoods.
                </p>
                <p>
                  By splitting the mailer space among a limited lineup of non-competing local businesses, we cut print and postage costs by 83% compared to solo direct mail campaigns.
                </p>
                <ul className="explainer-bullets">
                  <li>USPS Every Door Direct Mail (EDDM) delivery</li>
                  <li>Exclusive category lockout ({activeSlug === "sanford" || activeAverages.cardType === "6x11" ? "only one dentist, one auto shop, etc." : "only one realtor, one roofer, etc."})</li>
                  <li>Free professional ad graphic design & copywriting consulting</li>
                  <li>Integrated QR tracking link to measure scan engagement</li>
                </ul>
              </div>
            </Reveal>

            <Reveal variant="left" delay={150}>
              {/* 3 Image Layout from Example Site */}
              <div className="explainer-images-grid">
                <img
                  src="/assets/street_trees.jpeg"
                  alt="Beautiful local street trees"
                  className="explainer-img-top"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600"; }}
                />
                <img
                  src="/assets/card_by_mail.png"
                  alt="Postcard inside a mailbox"
                  className="explainer-img-left"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?q=80&w=400"; }}
                />
                <img
                  src="/assets/stack_of_cards.png"
                  alt="Stack of co-op postcards"
                  className="explainer-img-right"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400"; }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="section section-alt">
        <div className="container">
          <Reveal variant="bottom">
            <div className="section-header">
              <h2 className="section-title">How It <span>Works</span></h2>
              <p className="section-desc">Reaching targeted homeowners in 3 simple steps</p>
            </div>
          </Reveal>

          <div className="steps-grid">
            <Reveal variant="bottom" delay={0} className="step-card">
              <div className="step-num">1</div>
              <h4>Choose Your Slot Size</h4>
              <p>Select a Standard, Double, or Half ad slot directly from our interactive live postcard mockup below. Secure it with a Stripe payment link.</p>
            </Reveal>
            <Reveal variant="bottom" delay={100} className="step-card">
              <div className="step-num">2</div>
              <h4>Review Ad Creative</h4>
              <p>Provide your own print-ready ad design or collaborate with our professional designers to create a custom graphic that grabs attention.</p>
            </Reveal>
            <Reveal variant="bottom" delay={200} className="step-card">
              <div className="step-num">3</div>
              <h4>Delivered to Homes</h4>
              <p>We print, sort, and deliver the oversized cards directly to targeted local carrier routes via the USPS Every Door Direct Mail network.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Coverage Specs Banner (Centered vertical columns for mobile with scroll reveal animations) */}
      <section className="coverage-banner-section" style={{ background: "var(--primary)", color: "#ffffff", padding: "60px 0" }}>
        <div className="container">
          <div className="coverage-stats-wrap">
            <Reveal variant="bottom" delay={0} className="coverage-stat-col">
              <div className="coverage-stat-num">{activeAverages.cardType || "9x12"}"</div>
              <div className="coverage-stat-lbl">Card Size</div>
            </Reveal>

            <div className="coverage-stat-divider hide-mobile"></div>

            {/* Households Count */}
            <Reveal variant="bottom" delay={100} className="coverage-stat-col">
              <div className="coverage-stat-num">{activeAverages.doors.toLocaleString()}</div>
              <div className="coverage-stat-lbl">Households</div>
            </Reveal>

            <div className="coverage-stat-divider hide-mobile"></div>

            {/* Available Spots */}
            <Reveal variant="bottom" delay={200} className="coverage-stat-col">
              <div className="coverage-stat-num">{availableSlotsCount}</div>
              <div className="coverage-stat-lbl">Available Spots</div>
            </Reveal>
          </div>

          <Reveal variant="bottom" delay={300}>
            <div style={{ fontSize: "2.5rem", fontWeight: "800", color: "#ffffff", marginBottom: "5px", textAlign: "center" }}>
              {activeCampaign.name}, FL
            </div>
            <div style={{ textTransform: "uppercase", fontSize: "0.85rem", color: "var(--accent)", letterSpacing: "2.5px", fontWeight: "900", textAlign: "center" }}>
              Coverage Area
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map Section (Clean Map Background & 3x2 static averages boxes next to it) */}
      <section className="section" id="coverage" style={{ background: "#ffffff" }}>
        <div className="container">
          <div className="map-layout">
            <Reveal variant="left" delay={0}>
              {/* Map Wrapper displaying the clean map image */}
              <div className="map-wrapper">
                <img
                  src={activeAverages.mapImageUrl || "/assets/longwood_map.png"}
                  alt={`${activeCampaign.city} Coverage Map`}
                />
              </div>
            </Reveal>

            <div className="map-details">
              <Reveal variant="bottom">
                <h2 style={{ fontSize: "2.25rem", lineHeight: "1.2", marginBottom: "16px" }}>
                  Targeting <span style={{ color: "var(--accent)" }}>{activeCampaign.city}</span> Neighborhoods
                </h2>
              </Reveal>

              <Reveal variant="bottom" delay={100}>
                <p style={{ color: "var(--primary-light)", fontSize: "1.1rem", marginBottom: "24px" }}>
                  Our shared direct mail campaign reaches premium homeowner corridors. See the average household demographics for the entire {activeCampaign.name} campaign area below:
                </p>
              </Reveal>

              {/* 3x2 Grid of Town Averages */}
              <Reveal variant="bottom" delay={200}>
                <div className="town-stats-grid">
                  <div className="town-stat-box">
                    <div className="town-stat-val">{activeAverages.doors.toLocaleString()}</div>
                    <div className="town-stat-lbl">Doors</div>
                  </div>
                  <div className="town-stat-box">
                    <div className="town-stat-val">{activeAverages.income}</div>
                    <div className="town-stat-lbl">Avg Household Income</div>
                  </div>
                  <div className="town-stat-box">
                    <div className="town-stat-val">{activeAverages.age} Yrs</div>
                    <div className="town-stat-lbl">Average Age</div>
                  </div>
                  <div className="town-stat-box">
                    <div className="town-stat-val">10¢</div>
                    <div className="town-stat-lbl">Price/Door</div>
                  </div>
                  <div className="town-stat-box">
                    <div className="town-stat-val">{activeAverages.householdSize}</div>
                    <div className="town-stat-lbl">Avg Household Size</div>
                  </div>
                  <div className="town-stat-box">
                    <div className="town-stat-val">{activeAverages.residencyLength} Yrs</div>
                    <div className="town-stat-lbl">Avg Residency Length</div>
                  </div>
                </div>
              </Reveal>

              <Reveal variant="bottom" delay={300}>
                <div style={{ marginTop: "32px" }}>
                  <a href="#contact" className="btn btn-primary">
                    Reserve Your Spot →
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Postcard Interactive Preview Section (Matches Lincoln Spotlight's custom slots grid) */}
      <section className="section section-alt" id="postcard-preview">
        <div className="container">
          <Reveal variant="bottom">
            <div className="section-header">
              <h2 className="section-title">See The Lineup For Our <span>Next Mailing</span></h2>
              <p className="section-desc">Fill out the form below to claim your spot! One business per industry allowed.</p>
            </div>
          </Reveal>

          <div className="postcard-panel">
            <Reveal variant="bottom" className="postcard-intro">
              <h3>Postcard Placements</h3>
              <p>
                {activeAverages.cardType || "9x12"}" co-op mailer layout. Check the claimed industry categories in your local area and select any available spot to submit a reservation inquiry.
              </p>

              <div className="postcard-status-row" style={{ margin: "20px 0" }}>
                <div className="status-badge available" style={{ minWidth: "130px" }}>
                  <div className="dot"></div>
                  <span>{availableSlotsCount} Available</span>
                </div>
                <div className="status-badge sold" style={{ minWidth: "130px" }}>
                  <div className="dot"></div>
                  <span>{soldSlotsCount} Claimed</span>
                </div>
              </div>

              <div style={{ margin: "20px 0", fontSize: "0.95rem", color: "var(--primary-light)" }}>
                Need more info before deciding?
              </div>

              <a href="#contact" className="btn btn-secondary">Contact Us</a>
            </Reveal>

            <Reveal variant="bottom" delay={150} className="postcard-container-wrap">
              {/* Sideways Card Flip animation card */}
              <div className={`postcard-flip-container ${activeAverages.cardType === "6x11" ? "card-type-6x11" : ""}`}>
                <div className={`postcard-flip-card ${activeSide === "back" ? "flipped" : ""}`}>

                  {/* FRONT SIDE PANEL */}
                  <div className="postcard-flip-front">
                    <div className="postcard-grid-side">
                      {/* Divider bar */}
                      <div className="postcard-divider-bar">
                        {activeAverages.cardType === "6x11" ? `COMMUNITY SPOTLIGHT — ${activeCampaign.city.toUpperCase()}` : `The ${activeCampaign.city} Spotlight`}
                      </div>

                      {/* Recipient box on the right of the divider bar */}
                      <div className="postcard-recipient-box">
                        <span>Local Postal</span>
                        <span>Customer</span>
                      </div>

                      {/* USPS postage indicia box on the right of the divider bar */}
                      <div className="postcard-indicia-box">
                        <span>PRSRT STD</span>
                        <span>ECRWSS</span>
                        <span>U.S. POSTAGE</span>
                        <strong>PAID</strong>
                        <span>EDDM RETAIL</span>
                      </div>

                      {cardSlotsLayout.map((slot) => {
                        const isSold = slot.soldFront;
                        const adImg = slot.adImageUrlFront;
                        return isSold ? (
                          <div
                            key={slot.id}
                            className="postcard-slot-item status-sold"
                            style={{
                              left: `${slot.x}%`,
                              top: `${slot.y}%`,
                              width: `${slot.w}%`,
                              height: `${slot.h}%`
                            }}
                          >
                            {adImg ? (
                              <img
                                src={adImg}
                                alt={slot.bizFront || "Claimed Slot ad"}
                                className="slot-ad-img"
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                              />
                            ) : (
                              <div className="slot-sold-fallback" style={{ fontSize: "0.85rem" }}>
                                {slot.bizFront || "Category Claimed"}
                              </div>
                            )}
                          </div>
                        ) : (
                          <div
                            key={slot.id}
                            className={`postcard-slot-item status-available ${activeAverages.cardType === "6x11" ? "slot-card-6x11" : ""} ${slot.type === "half" ? "slot-type-half" : ""}`}
                            style={{
                              left: `${slot.x}%`,
                              top: `${slot.y}%`,
                              width: `${slot.w}%`,
                              height: `${slot.h}%`
                            }}
                          >
                            <div className="postcard-slot-title">
                              {slot.type === "standard" ? "Standard Slot" : slot.type === "double" ? "Double Slot" : "Half Slot"}
                            </div>
                            <div className="postcard-slot-dim">
                              {activeAverages.cardType === "6x11"
                                ? (slot.type === "double" ? '5.0" x 2.5"' : '2.5" x 2.5"')
                                : (slot.type === "double" ? '4" x 6"' : slot.type === "half" ? '2" x 3"' : '4" x 3"')}
                            </div>
                            <div className="postcard-slot-price">
                              ${activeAverages.pricing[slot.type as "standard" | "double" | "half"]}
                            </div>
                            {activeAverages.cardType === "6x11" ? (
                              <div className="postcard-slot-offer-box">
                                YOUR OFFER / DEAL
                              </div>
                            ) : (
                              <>
                                {slot.type !== "half" && (
                                  <div className="postcard-slot-ad-box">
                                    YOUR AD HERE
                                  </div>
                                )}
                                <div className="postcard-slot-badge-avail">
                                  Available
                                </div>
                              </>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* BACK SIDE PANEL */}
                  <div className="postcard-flip-back">
                    <div className="postcard-grid-side">
                      {/* Divider bar showing Support Local Businesses */}
                      <div className="postcard-divider-bar">
                        {activeAverages.cardType === "6x11" ? `COMMUNITY SPOTLIGHT — ${activeCampaign.city.toUpperCase()}` : `Support Local Businesses`}
                      </div>

                      {/* Recipient box on the right of the divider bar on back side */}
                      <div className="postcard-recipient-box">
                        <span>Local Postal</span>
                        <span>Customer</span>
                      </div>

                      {/* USPS postage indicia box on the right of the divider bar on back side */}
                      <div className="postcard-indicia-box">
                        <span>PRSRT STD</span>
                        <span>ECRWSS</span>
                        <span>U.S. POSTAGE</span>
                        <strong>PAID</strong>
                        <span>EDDM RETAIL</span>
                      </div>

                      {cardSlotsLayout.map((slot) => {
                        const isSold = slot.soldBack;
                        const adImg = slot.adImageUrlBack;
                        return isSold ? (
                          <div
                            key={slot.id}
                            className="postcard-slot-item status-sold"
                            style={{
                              left: `${slot.x}%`,
                              top: `${slot.y}%`,
                              width: `${slot.w}%`,
                              height: `${slot.h}%`
                            }}
                          >
                            {adImg ? (
                              <img
                                src={adImg}
                                alt={slot.bizBack || "Claimed Slot ad"}
                                className="slot-ad-img"
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                              />
                            ) : (
                              <div className="slot-sold-fallback" style={{ fontSize: "0.85rem" }}>
                                {slot.bizBack || "Category Claimed"}
                              </div>
                            )}
                          </div>
                        ) : (
                          <div
                            key={slot.id}
                            className={`postcard-slot-item status-available ${activeAverages.cardType === "6x11" ? "slot-card-6x11" : ""} ${slot.type === "half" ? "slot-type-half" : ""}`}
                            style={{
                              left: `${slot.x}%`,
                              top: `${slot.y}%`,
                              width: `${slot.w}%`,
                              height: `${slot.h}%`
                            }}
                          >
                            <div className="postcard-slot-title">
                              {slot.type === "standard" ? "Standard Slot" : slot.type === "double" ? "Double Slot" : "Half Slot"}
                            </div>
                            <div className="postcard-slot-dim">
                              {activeAverages.cardType === "6x11"
                                ? (slot.type === "double" ? '5.0" x 2.5"' : '2.5" x 2.5"')
                                : (slot.type === "double" ? '4" x 6"' : slot.type === "half" ? '2" x 3"' : '4" x 3"')}
                            </div>
                            <div className="postcard-slot-price">
                              ${activeAverages.pricing[slot.type as "standard" | "double" | "half"]}
                            </div>
                            {activeAverages.cardType === "6x11" ? (
                              <div className="postcard-slot-offer-box">
                                YOUR OFFER / DEAL
                              </div>
                            ) : (
                              <>
                                {slot.type !== "half" && (
                                  <div className="postcard-slot-ad-box">
                                    YOUR AD HERE
                                  </div>
                                )}
                                <div className="postcard-slot-badge-avail">
                                  Available
                                </div>
                              </>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                </div>
              </div>

              {/* Side Toggler buttons */}
              <div className="side-toggle">
                <button
                  className={`btn ${activeSide === "front" ? "btn-primary" : "btn-secondary"}`}
                  style={{ padding: "8px 24px", fontSize: "0.85rem" }}
                  onClick={() => setActiveSide("front")}
                >
                  Front Layout
                </button>
                <button
                  className={`btn ${activeSide === "back" ? "btn-primary" : "btn-secondary"}`}
                  style={{ padding: "8px 24px", fontSize: "0.85rem" }}
                  onClick={() => setActiveSide("back")}
                >
                  Back Layout
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section" id="pricing">
        <div className="container">
          <Reveal variant="bottom">
            <div className="section-header">
              <h2 className="section-title">Postcard <span>Pricing Packages</span></h2>
              <p className="section-desc">
                Flat co-op prices split among local businesses. Select commitment duration to view multi-month discount incentives.
              </p>
            </div>
          </Reveal>

          {/* Pricing Tabs (Stacked text tabs for mobile) */}
          <Reveal variant="bottom" delay={100}>
            <div className="pricing-tabs-wrap">
              <div className="pricing-tabs">
                <button
                  className={`pricing-tab-btn ${billingPeriod === "1mo" ? "active" : ""}`}
                  onClick={() => setBillingPeriod("1mo")}
                >
                  <span className="tab-title">1 Month</span>
                  <span className="tab-sub">Run</span>
                </button>
                <button
                  className={`pricing-tab-btn ${billingPeriod === "3mo" ? "active" : ""}`}
                  onClick={() => setBillingPeriod("3mo")}
                >
                  <span className="tab-title">3 Months</span>
                  <span className="tab-sub">(5% Off)</span>
                </button>
                <button
                  className={`pricing-tab-btn ${billingPeriod === "6mo" ? "active" : ""}`}
                  onClick={() => setBillingPeriod("6mo")}
                >
                  <span className="tab-title">6 Months</span>
                  <span className="tab-sub">(10% Off)</span>
                </button>
                <button
                  className={`pricing-tab-btn ${billingPeriod === "12mo" ? "active" : ""}`}
                  onClick={() => setBillingPeriod("12mo")}
                >
                  <span className="tab-title">12 Months</span>
                  <span className="tab-sub">(20% Off)</span>
                </button>
              </div>
            </div>
          </Reveal>

          <div className="pricing-grid">
            {/* Standard Slot Card */}
            <Reveal variant="bottom" delay={0} className="pricing-card popular">
              <div className="pricing-badge">Most Popular</div>
              <h4>Standard Ad Spot</h4>
              <div className="dimensions">Ad Size: {activeAverages.cardType === "6x11" ? '2.5" x 2.5"' : '4" x 3"'}</div>

              {renderPriceDisplay(activeAverages.pricing.standard)}

              <ul className="pricing-features">
                <li>Professional ad design layout included</li>
                <li>Exclusive industry placement (No competitors)</li>
                <li>Integrated QR tracking link</li>
                <li>Direct USPS mailing to {activeAverages.doors.toLocaleString()} households</li>
                <li>Performance recap reports</li>
              </ul>

              <a href="#contact" className="btn btn-primary">Book Standard Slot</a>
            </Reveal>

            {/* Double Slot Card */}
            <Reveal variant="bottom" delay={100} className="pricing-card">
              <h4>Double Ad Spot</h4>
              <div className="dimensions">Ad Size: {activeAverages.cardType === "6x11" ? '5" x 2.5"' : '4" x 6"'}</div>

              {renderPriceDisplay(activeAverages.pricing.double)}

              <ul className="pricing-features">
                <li>Double the visibility, maximum impact</li>
                <li>Professional ad design layout included</li>
                <li>Exclusive industry placement</li>
                <li>Integrated QR tracking link</li>
                <li>Direct USPS mailing to {activeAverages.doors.toLocaleString()} households</li>
              </ul>

              <a href="#contact" className="btn btn-primary">Book Double Slot</a>
            </Reveal>

            {/* Half Slot Card */}
            {activeAverages.pricing.half > 0 && (
              <Reveal variant="bottom" delay={200} className="pricing-card">
                <h4>Half Ad Spot</h4>
                <div className="dimensions">Ad Size: 2" x 3"</div>

                {renderPriceDisplay(activeAverages.pricing.half)}

                <ul className="pricing-features">
                  <li>Budget-friendly community visibility</li>
                  <li>Professional ad design layout included</li>
                  <li>Exclusive industry placement</li>
                  <li>Integrated QR tracking link</li>
                  <li>Direct USPS mailing to {activeAverages.doors.toLocaleString()} households</li>
                </ul>

                <a href="#contact" className="btn btn-primary">Book Half Slot</a>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* Stats Section / By The Numbers */}
      <section className="section section-alt">
        <div className="container">
          <Reveal variant="bottom">
            <div className="section-header">
              <h2 className="section-title">By The <span>Numbers</span></h2>
              <p className="section-desc">Why shared direct mail postcards deliver unparalleled local marketing ROI</p>
            </div>
          </Reveal>

          <div className="stats-grid">
            <Reveal variant="bottom" delay={0} className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Open Rate<sup>1</sup></div>
            </Reveal>
            <Reveal variant="bottom" delay={100} className="stat-item">
              <div className="stat-number">9.0%</div>
              <div className="stat-label">Average Response Rate<sup>2</sup></div>
            </Reveal>
            <Reveal variant="bottom" delay={200} className="stat-item">
              <div className="stat-number">17 Days</div>
              <div className="stat-label">Average Household Lifespan<sup>3</sup></div>
            </Reveal>
            <Reveal variant="bottom" delay={300} className="stat-item">
              <div className="stat-number">83%+</div>
              <div className="stat-label">Cost Savings Sharing Mailers<sup>4</sup></div>
            </Reveal>
          </div>

          <Reveal variant="bottom" delay={150}>
            <div className="stats-sources">
              <p style={{ marginBottom: "6px" }}>
                <sup>1</sup> <strong>USPS Household Mail Study:</strong> Unlike envelopes or digital ads, oversized postcards do not require opening and are read immediately when picked up from the mailbox.
              </p>
              <p style={{ marginBottom: "6px" }}>
                <sup>2</sup> <strong>Association of National Advertisons (ANA):</strong> Direct mail averages a 9% response rate for house lists, significantly higher than email (1%) or paid social search ads.
              </p>
              <p style={{ marginBottom: "6px" }}>
                <sup>3</sup> <strong>JICMAIL Direct Mail Insights:</strong> Premium local shared postcards are kept on kitchen counters, desks, or refrigerators for an average of 17 days.
              </p>
              <p>
                <sup>4</sup> <strong>Co-op Formulas:</strong> Normal solo printing and postage to {activeAverages.doors.toLocaleString()} homes costs about {activeAverages.doors === 2500 ? "$1,500" : "$3,000"}. By splitting layout spaces, local services reach the exact same doors for pennies per door.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Testimonials Section (Horizontal Scroll layout) */}
      <section className="section">
        <div className="container">
          <Reveal variant="bottom">
            <div className="section-header">
              <h2 className="section-title">Trusted By <span>Local Services</span></h2>
              <p className="section-desc">See how local business owners are generating calls and locking out competitors</p>
            </div>
          </Reveal>

          <div className="testimonials-grid">
            {testimonials.map((t, idx) => (
              <Reveal variant="bottom" delay={idx * 100} className="testimonial-card" key={idx}>
                <div className="rating-stars">★★★★★</div>
                <p className="testimonial-quote">"{t.quote}"</p>
                <div className="testimonial-author">
                  <div className="author-name">{t.name}</div>
                  <div className="author-biz">{t.business}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About Section (Moved above FAQs as requested) */}
      <section className="section section-alt" id="about">
        <div className="container">
          <div className="about-grid">
            <Reveal variant="bottom">
              <div className="about-photo-wrap">
                <div className="about-photo-backdrop"></div>
                <img
                  src="/assets/kyle_headshot.png"
                  alt="Kyle - Local Spotlight Publisher"
                  className="about-photo"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400"; }}
                />
              </div>
            </Reveal>

            <Reveal variant="bottom" delay={150}>
              <div className="about-content">
                <h3>Meet the Organizer</h3>
                <p>
                  Hi, I'm Kyle, the publisher and coordinator behind <strong>Local Spotlight Mail</strong>. I'm a Longwood, FL native with more than 4 years of experience in digital design, 10 years in software development and consulting, and 5 years of community connection, I created Local Spotlight Mail to showcase exceptional local businesses and connect residents around my hometown with the very best in our community.
                </p>
                <p>
                  Outside of work, you'll usually find me enjoying nature or volunteering in farming projects around the world. Most recently, these include Eco Caminhos in Brazil, family operated avocado farms in Spain, and eco communities in Portugal. It's an experience that continually inspires me and reminds me to connect with the earth more.                </p>
                <p>
                  My goal here is simple: help great local businesses gain the recognition they deserve while making it easier for residents to discover the businesses we're proud to feature.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section" id="faq">
        <div className="container">
          <Reveal variant="bottom">
            <div className="section-header">
              <h2 className="section-title">Frequently Asked <span>Questions</span></h2>
              <p className="section-desc">Common inquiries about our shared direct mail campaigns</p>
            </div>
          </Reveal>

          <div className="faq-accordion">
            {faqs.map((faq, idx) => {
              let dynamicAnswer = faq.a.replace("5,000", activeAverages.doors.toLocaleString());
              dynamicAnswer = dynamicAnswer.replace("9x12\"", `${activeAverages.cardType || "9x12"}"`);

              // Dynamic ad design dimensions
              if (faq.q.includes("design my own ad")) {
                if (activeAverages.cardType === "6x11") {
                  dynamicAnswer = "The 6x11 Community Mailer is designed for maximum response with clean branding and a high-converting deal offer (ad size 2.5\" x 2.5\" for standard slots or 5.0\" x 2.5\" for double slots). We provide free professional layout design for your deal offer, or you can submit your own print-ready graphic.";
                } else {
                  dynamicAnswer = "Absolutely! You can submit your own print-ready ad graphic (3.8\" x 2.8\" for standard slots, 3.8\" x 5.6\" for double slots, or 1.9\" x 2.8\" for half slots) or take advantage of our free professional graphic design service.";
                }
              }

              // Dynamic business types
              if (faq.q.includes("What kind of businesses advertise")) {
                if (activeSlug === "sanford") {
                  dynamicAnswer = "Any local business serving Sanford residents and families! This includes restaurants, craft breweries, salons, general & cosmetic dentists, auto repair & detailing shops, medical spas, fitness studios, and pet care.";
                } else {
                  dynamicAnswer = "Any business that serves local homeowners and families! This includes home service providers (roofing, landscaping, pest control, pool screen repair, HVAC) as well as premium consumer services (med spas, dentists, real estate agents, auto detailing).";
                }
              }

              // Dynamic category exclusivity example
              if (faq.q.includes("category exclusivity work")) {
                if (activeSlug === "sanford") {
                  dynamicAnswer = "To protect our advertisers and ensure maximum response rates, we enforce strict category exclusivity. Only one business per category (e.g., one dentist, one auto repair shop, one med spa) is allowed on each card. Secure your spot before your competitors do!";
                }
              }

              return (
                <Reveal variant="bottom" delay={idx * 50} className={`faq-item ${activeFaqIndex === idx ? "active" : ""}`} key={idx}>
                  <button className="faq-trigger" onClick={() => handleFaqToggle(idx)}>
                    <span className="faq-question">{faq.q}</span>
                    <span className="faq-icon-wrap">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  </button>
                  <div className="faq-content" style={{ maxHeight: activeFaqIndex === idx ? "200px" : "0px" }}>
                    <div className="faq-answer">{dynamicAnswer}</div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section section-alt" id="contact">
        <div className="container">
          <div className="contact-grid">
            <Reveal variant="bottom">
              <div className="contact-text">
                <h3>Reach Out To Us</h3>
                <p>
                  To maintain exclusive placements, we only allow <strong>one business per category</strong> ({activeSlug === "sanford" ? "e.g. one auto shop, one dentist, one med spa" : "e.g. one HVAC specialist, one dentist, one realtor"}) on each card.
                </p>
                <p>
                  Fill out the form to inquire about slot availability in your territory, request custom ad designs, or ask questions about our mailing schedule.
                </p>

                <ul className="contact-info-list">
                  <li className="contact-info-item">
                    {/* SVG envelope icon replacing broken email code */}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "16px", color: "var(--accent)" }}>
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <div>kyle@localspotlightmail.com</div>
                  </li>
                  <li className="contact-info-item">
                    {/* SVG bubble chat icon replacing plain text */}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "16px", color: "var(--accent)" }}>
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                    <div><strong>Call:</strong> 407-461-5219</div>
                  </li>
                  <li className="contact-info-item">
                    <a
                      href="https://www.facebook.com/profile.php?id=61592832671289"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover-accent"
                      style={{ display: "contents", color: "inherit" }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "16px", color: "var(--accent)" }}>
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                      <div>Facebook</div>
                    </a>
                  </li>
                  <li className="contact-info-item">
                    <a
                      href="https://www.linkedin.com/company/local-spotlight-mail/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover-accent"
                      style={{ display: "contents", color: "inherit" }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "16px", color: "var(--accent)" }}>
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                      <div>LinkedIn</div>
                    </a>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal variant="bottom" delay={150}>
              <div className="contact-form-card">
                {formSubmitted ? (
                  <div style={{ textAlign: "center", padding: "20px" }}>
                    <h4 style={{ color: "var(--accent)", marginBottom: "12px", fontSize: "1.5rem" }}>Inquiry Submitted!</h4>
                    <p style={{ color: "var(--primary-light)" }}>
                      Thanks for reaching out. We will review your request and contact you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                      <label className="form-label">Name*</label>
                      <input
                        type="text"
                        className="form-input"
                        required
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Business Name*</label>
                      <input
                        type="text"
                        className="form-input"
                        required
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder={getBusinessPlaceholder()}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address*</label>
                      <input
                        type="email"
                        className="form-input"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        className="form-input"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="407-555-5555"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Message*</label>
                      <textarea
                        className="form-input"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your business or the ad slot size you want..."
                      />
                    </div>
                    {submitError && (
                      <div style={{ color: "#ef4444", marginBottom: "12px", fontSize: "0.9rem", textAlign: "center" }}>
                        {submitError}
                      </div>
                    )}
                    <button type="submit" disabled={submitting} className="btn btn-primary" style={{ width: "100%", marginTop: "10px", opacity: submitting ? 0.7 : 1 }}>
                      {submitting ? "Submitting..." : "Submit Reservation Inquiry"}
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <a href="#" className="footer-logo">
                {/* Logo magnifying glass symbol */}
                <svg className="logo-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="7" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <span>Local Spotlight Mail</span>
              </a>
              <p className="footer-desc">
                Uniting local services and businesses to share direct mail postage and print costs, helping you reach targeted homeowners for pennies per door.
              </p>
              <div className="footer-socials" style={{ display: "flex", gap: "16px", marginTop: "16px" }}>
                <a
                  href="https://www.facebook.com/profile.php?id=61592832671289"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-accent"
                  style={{ color: "rgba(255,255,255,0.7)", display: "inline-flex", transition: "color 0.2s" }}
                  aria-label="Facebook"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/local-spotlight-mail/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-accent"
                  style={{ color: "rgba(255,255,255,0.7)", display: "inline-flex", transition: "color 0.2s" }}
                  aria-label="LinkedIn"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h5 className="footer-title">Active Territories</h5>
              <ul className="footer-links">
                {campaignRoutes.map((c) => (
                  <li key={c.slug}>
                    <button
                      onClick={() => handleLocationChange(c.slug)}
                      style={{ background: "none", border: "none", color: "rgba(255,255,255,0.7)", cursor: "pointer", fontSize: "0.9rem", textAlign: "left", padding: 0 }}
                      className="hover-accent"
                    >
                      {c.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="footer-title">Quick Links</h5>
              <ul className="footer-links">
                <li><a href="#what-we-do">What We Do</a></li>
                <li><a href="#coverage">Map</a></li>
                <li><a href="#postcard-preview">Preview</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#faq">FAQs</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <div>
              &copy; {new Date().getFullYear()} localspotlightmail.com. All rights reserved.
            </div>
            <div className="footer-legal-links">
              <a href="/terms">Terms of Service</a>
              <a href="/privacy">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
