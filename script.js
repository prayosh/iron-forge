// ------------------------------------------------------------------
// Master Static Dataset Inlined for Vanilla JS execution
// ------------------------------------------------------------------

const FACILITIES = [
  {
    id: 1,
    iconName: "dumbbell",
    title: "Modern Equipment",
    description: "500+ premium machines from Life Fitness & Technogym. Free weights up to 100kg."
  },
  {
    id: 2,
    iconName: "compass",
    title: "Yoga & Meditation",
    description: "Dedicated 2,000 sq ft studio. Morning & evening sessions with certified instructors."
  },
  {
    id: 3,
    iconName: "leaf",
    title: "Outdoor Open Space",
    description: "12,000 sq ft outdoor functional training zone. Sled tracks, battle ropes, tire flips."
  },
  {
    id: 4,
    iconName: "zap",
    title: "Cardio Zone",
    description: "60+ treadmills, cycles, ellipticals, rowing machines. All with personal screens."
  },
  {
    id: 5,
    iconName: "flame",
    title: "Strength Training",
    description: "Olympic lifting platforms, power racks, deadlift zones."
  },
  {
    id: 6,
    iconName: "shield",
    title: "boxing",
    description: "Full boxing ring, heavy bags, speed bags, MMA mats."
  },
  {
    id: 7,
    iconName: "waves",
    title: "Steam & Sauna",
    description: "Post-workout recovery steam room and dry sauna."
  },
  {
    id: 8,
    iconName: "apple",
    title: "Nutrition Bar",
    description: "In-house sugar-free protein bar & nutrition consultation."
  },
  {
    id: 9,
    iconName: "award",
    title: "Premium Locker Rooms",
    description: "Spacious changing rooms with lockers, showers, and grooming area."
  }
];

const PLANS = [
  {
    id: "starter",
    name: "STARTER",
    price: 999,
    period: "month",
    isPopular: false,
    features: [
      "Access to gym floor",
      "Basic equipment",
      "1 group class/week",
      "Locker access"
    ]
  },
  {
    id: "elite",
    name: "ELITE",
    price: 1799,
    period: "month",
    isPopular: true,
    features: [
      "Full gym access",
      "Unlimited group classes",
      "2 PT sessions/month",
      "Sauna & steam access",
      "Nutrition consultation"
    ]
  },
  {
    id: "beast",
    name: "BEAST MODE",
    price: 2999,
    period: "month",
    isPopular: false,
    features: [
      "Everything in Elite",
      "Unlimited PT sessions",
      "24/7 access card",
      "Personalized diet plan",
      "Priority equipment booking"
    ]
  }
];

const TRAINERS = [
  {
    id: 1,
    name: "Arjun Mehta",
    role: "Head Strength Coach",
    initials: "AM",
    certifications: ["NSCA-CSCS Certified", "10+ Years Experience"],
    bio: "Head Strength Coach. Specializes in powerlifting training, strength conditioning, and advanced muscle hypertrophy.",
    instagram: "https://instagram.com/arjun_strength",
    youtube: "https://youtube.com/arjun_strength"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Yoga & Wellness Lead",
    initials: "PS",
    certifications: ["RYT-500 Certified", "8+ Years Experience"],
    bio: "Expert in Hatha, Vinyasa and restorative yoga formats. Dedicated to physical-mental synergy and alignment.",
    instagram: "https://instagram.com/priya_yoga",
    facebook: "https://facebook.com/priya_yoga"
  },
  {
    id: 3,
    name: "Rohan Das",
    role: "Cardio & Boxing Coach",
    initials: "RD",
    certifications: ["Former State Boxer", "Certified Trainer"],
    bio: "Specializes in high intensity interval training (HIIT), fast-paced metabolic conditioning, and modern combat athletics.",
    instagram: "https://instagram.com/rohan_boxing",
    youtube: "https://youtube.com/rohan_boxing"
  },
  {
    id: 4,
    name: "Neha Gupta",
    role: "Nutrition Coach",
    initials: "NG",
    certifications: ["MSc Sports Nutrition", "Clinical Dietician"],
    bio: "Provides custom calculated macros, detailed metabolic speed assessments, and holistic lifestyle coaching.",
    instagram: "https://instagram.com/neha_nutri",
    facebook: "https://facebook.com/neha_nutri"
  }
];

const TESTIMONIALS = [
  {
    id: 1,
    text: "IronForge transformed my body and mindset. Best gym in Jamshedpur!",
    author: "Amit K.",
    role: "Member since 2021",
    rating: 5
  },
  {
    id: 2,
    text: "Priya's yoga classes are life-changing. I sleep better, feel stronger.",
    author: "Sneha R.",
    role: "Yoga Practitioner",
    rating: 5
  },
  {
    id: 3,
    text: "Rohan's boxing sessions are INTENSE. Lost 12kg in 3 months!",
    author: "Vikram S.",
    role: "Boxing Club Member",
    rating: 5
  },
  {
    id: 4,
    text: "The equipment quality is unmatched. Like training in a pro facility.",
    author: "Rahul M.",
    role: "Powerlifter",
    rating: 5
  },
  {
    id: 5,
    text: "Arjun helped me deadlift 150kg. True expert coaching.",
    author: "Karan P.",
    role: "Strength Athlete",
    rating: 5
  },
  {
    id: 6,
    text: "Clean, modern, motivating. IronForge is my second home.",
    author: "Divya T.",
    role: "Athletic Club Member",
    rating: 5
  }
];

const OPEN_HOURS = [
  { day: "Monday", hours: "5:00 AM – 11:00 PM", dayNum: 1 },
  { day: "Tuesday", hours: "5:00 AM – 11:00 PM", dayNum: 2 },
  { day: "Wednesday", hours: "5:00 AM – 11:00 PM", dayNum: 3 },
  { day: "Thursday", hours: "5:00 AM – 11:00 PM", dayNum: 4 },
  { day: "Friday", hours: "5:00 AM – 11:00 PM", dayNum: 5 },
  { day: "Saturday", hours: "5:00 AM – 10:00 PM", dayNum: 6 },
  { day: "Sunday", hours: "6:00 AM – 8:00 PM", dayNum: 0 },
  { day: "Public Holidays", hours: "7:00 AM – 6:00 PM", dayNum: -1 }
];

// Helper functions for hours status
function getGymStatus() {
  const date = new Date();
  const day = date.getDay(); // 0 Sunday, 1 Monday ... 6 Saturday
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const timeVal = hours + minutes / 60;

  let isOpen = false;
  let scheduleStr = "";

  if (day >= 1 && day <= 5) {
    isOpen = timeVal >= 5 && timeVal < 23;
    scheduleStr = "5:00 AM – 11:00 PM";
  } else if (day === 6) {
    isOpen = timeVal >= 5 && timeVal < 22;
    scheduleStr = "5:00 AM – 10:00 PM";
  } else {
    isOpen = timeVal >= 6 && timeVal < 20;
    scheduleStr = "6:00 AM – 8:00 PM";
  }

  return { isOpen, schedule: scheduleStr, day };
}

// ------------------------------------------------------------------
// Main Execution flow runs on DOM Load
// ------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  
  // 1. Populate Gym Timings
  renderTimings();

  // 2. Populate Facilities
  renderFacilities();

  // 3. Populate Membership Plans
  renderPlans();

  // 4. Populate Trainers / Coaches (with CSS 3D Flipping)
  renderTrainers();

  // 5. Populate Testimonials track loops
  renderTestimonials();

  // 6. Initialize Lucide Icon Pack (Loads icons within custom markup dynamically)
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 7. Setup Mobile Navigation interaction
  setupMobileMenu();

  // 8. Intersection Scroll Revealer
  setupScrollReveal();

  // 9. Interactive Forms + Code Generation validation
  setupContactForm();

  // 10. Live Timings Check Intervals (12s loops)
  setInterval(() => {
    updateLiveStatus();
  }, 12000);

  // 11. Custom 3D perspective count on card hover
  setupTiltCards();

  // 12. Active Nav styling tracks
  setupActiveNavigation();

  // 13. Initialize Background 3D canvas barbell
  initializeThreeScene();
  
  // 14. Add Parallax visual shift on Title
  setupHeroParallax();
});

// ------------------------------------------------------------------
// Dom Populating Functions
// ------------------------------------------------------------------

function renderTimings() {
  const listContainer = document.getElementById("timings-list");
  if (!listContainer) return;

  const currentStatus = getGymStatus();
  listContainer.innerHTML = OPEN_HOURS.map((hourRow) => {
    const isToday = currentStatus.day === hourRow.dayNum;
    return `
      <div class="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-md transition-all duration-350 border ${
        isToday 
          ? 'bg-[#FF6B00]/10 border-[#FF6B00] shadow-[0_0_15px_rgba(255,107,0,0.15)]' 
          : 'bg-black/40 border-[#1a1a2e] hover:border-neutral-700'
      }">
        <div class="flex items-center gap-3">
          <i data-lucide="clock" class="w-5 h-5 ${isToday ? 'text-[#FF6B00]' : 'text-stone-500'}"></i>
          <span class="font-sans text-sm sm:text-base font-semibold ${isToday ? 'text-[#FF6B00]' : 'text-stone-100'}">
            ${hourRow.day}
          </span>
          ${isToday ? `
            <span class="text-[10px] bg-[#FF6B00] text-black font-extrabold uppercase px-2 py-0.5 rounded tracking-widest animate-pulse ml-2">
              TODAY
            </span>
          ` : ""}
        </div>
        <span class="font-mono text-xs sm:text-sm mt-2 sm:mt-0 ${isToday ? 'text-[#FF6B00] font-bold' : 'text-stone-400'}">
          ${hourRow.hours}
        </span>
      </div>
    `;
  }).join("");

  updateLiveStatus();
}

function updateLiveStatus() {
  const currentStatus = getGymStatus();
  const badge = document.getElementById("live-status-badge");
  const dot = document.getElementById("live-status-dot");
  const textVal = document.getElementById("live-status-text");

  if (!badge || !dot || !textVal) return;

  if (currentStatus.isOpen) {
    badge.className = "inline-flex items-center gap-2.5 px-6 py-3 rounded font-bebas text-2xl tracking-widest bg-[#FF6B00] text-black orange-pulse animate-pulse";
    dot.className = "w-3.5 h-3.5 rounded-full bg-black";
    textVal.innerText = "GYM IS OPEN NOW";
  } else {
    badge.className = "inline-flex items-center gap-2.5 px-6 py-3 rounded font-bebas text-2xl tracking-widest bg-red-950/50 text-red-500 border border-red-850";
    dot.className = "w-3.5 h-3.5 rounded-full bg-red-500";
    textVal.innerText = "CLOSED NOW";
  }
}

function renderFacilities() {
  const grid = document.getElementById("facilities-grid");
  if (!grid) return;

  grid.innerHTML = FACILITIES.map((facility, index) => {
    const delay = index * 100;
    return `
      <div class="reveal-on-scroll group card-dark p-8 rounded-lg transition-all duration-300 hover:scale-[1.03] hover:border-[#FF6B00] shadow-lg flex flex-col justify-between" style="animation-delay: ${delay}ms;">
        <div>
          <!-- Floating & Rotating 3D icon box -->
          <div class="w-14 h-14 bg-[#1a1a2e] flex items-center justify-center rounded text-[#FF6B00] border border-white/5 group-hover:border-[#FF6B00] group-hover:text-white transition-all duration-500 transform group-hover:rotate-y-180 mb-6 font-bold">
            <i data-lucide="${facility.iconName}" class="w-7 h-7"></i>
          </div>
          <h3 class="font-bebas text-2xl tracking-wider text-stone-100 group-hover:text-[#FF6B00] transition-colors">
            ${facility.title}
          </h3>
          <p class="font-sans text-sm text-stone-400 mt-3 leading-relaxed">
            ${facility.description}
          </p>
        </div>
        
        <div class="mt-6 flex items-center gap-1.5 text-xs text-[#FF6B00] font-semibold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          LEARN MORE <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
        </div>
      </div>
    `;
  }).join("");
}

function renderPlans() {
  const grid = document.getElementById("pricing-grid");
  if (!grid) return;

  grid.innerHTML = PLANS.map((plan) => {
    return `
      <div class="tilt-card flex flex-col justify-between p-8 rounded-lg border transition-all duration-300 relative ${
        plan.isPopular 
          ? 'card-dark border-[#FF6B00] shadow-[0_0_15px_rgba(255,107,0,0.4)]' 
          : 'card-dark border-white/5 hover:border-[#FF6B00]/40'
      }">
        <div>
          ${plan.isPopular ? `
            <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FF6B00] text-black text-[10px] font-extrabold uppercase px-4 py-1.5 rounded-full tracking-widest shadow-lg">
              MOST POPULAR
            </div>
          ` : ""}

          <div class="space-y-2 text-center pb-6 border-b border-[#1a1a2e]">
            <p class="font-bebas text-2xl tracking-widest text-stone-300">${plan.name}</p>
            <div class="flex items-baseline justify-center gap-1">
              <span class="font-sans text-stone-500 text-xl font-semibold">₹</span>
              <span class="font-bebas text-5xl sm:text-6xl text-white font-black">${plan.price.toLocaleString('en-IN')}</span>
              <span class="font-sans text-stone-400 text-sm">/${plan.period}</span>
            </div>
          </div>

          <!-- Feature Lists -->
          <div class="py-6 space-y-4">
            ${plan.features.map((feat) => `
              <div class="flex items-center gap-3">
                <div class="w-5 h-5 rounded-full bg-[#FF6B00]/10 flex items-center justify-center text-[#FF6B00]">
                  <i data-lucide="check" class="w-3.5 h-3.5"></i>
                </div>
                <span class="font-sans text-sm text-stone-300">${feat}</span>
              </div>
            `).join("")}
          </div>
        </div>

        <div class="pt-6 border-t border-[#1a1a2e]">
          <a
            href="#contact"
            onclick="selectMembershipPlan('${plan.name} - ₹${plan.price}/mo')"
            class="w-full py-3.5 rounded-sm font-bebas text-base tracking-widest uppercase font-bold text-center block transition-all ${
              plan.isPopular
                ? 'bg-[#FF6B00] text-black orange-pulse hover:bg-white hover:text-black'
                : 'bg-[#1a1a2e] text-stone-200 border border-white/5 hover:bg-[#FF6B00] hover:text-black hover:border-[#FF6B00]'
            }"
          >
            GET STARTED
          </a>
        </div>
      </div>
    `;
  }).join("");
}

// Global hook so inline onclick works
window.selectMembershipPlan = function(planName) {
  const planInput = document.getElementById("form-plan");
  if (planInput) {
    planInput.value = planName;
  }
};

function renderTrainers() {
  const grid = document.getElementById("trainers-grid");
  if (!grid) return;

  grid.innerHTML = TRAINERS.map((trainer, index) => {
    const delay = index * 120;
    
    let socialIconsHtml = "";
    if (trainer.instagram) {
      socialIconsHtml += `
        <a href="${trainer.instagram}" target="_blank" rel="noopener noreferrer" class="w-8 h-8 rounded-full bg-neutral-800 hover:bg-[#FF6B00] text-stone-200 hover:text-black flex items-center justify-center transition-colors">
          <i data-lucide="instagram" class="w-4 h-4"></i>
        </a>
      `;
    }
    if (trainer.facebook) {
      socialIconsHtml += `
        <a href="${trainer.facebook}" target="_blank" rel="noopener noreferrer" class="w-8 h-8 rounded-full bg-neutral-800 hover:bg-[#FF6B00] text-stone-200 hover:text-black flex items-center justify-center transition-colors">
          <i data-lucide="facebook" class="w-4 h-4"></i>
        </a>
      `;
    }
    if (trainer.youtube) {
      socialIconsHtml += `
        <a href="${trainer.youtube}" target="_blank" rel="noopener noreferrer" class="w-8 h-8 rounded-full bg-neutral-800 hover:bg-[#FF6B00] text-stone-200 hover:text-black flex items-center justify-center transition-colors">
          <i data-lucide="youtube" class="w-4 h-4"></i>
        </a>
      `;
    }

    return `
      <div class="reveal-on-scroll group h-[420px] perspective-1000" style="animation-delay: ${delay}ms;">
        <!-- 3D Transform flip card wrapper -->
        <div class="relative w-full h-full text-center transition-transform duration-700 transform-preserve-3d group-hover:rotate-y-180">
          
          <!-- FRONT SIDE -->
          <div class="absolute inset-0 w-full h-full backface-hidden card-dark border border-white/5 rounded-lg p-6 flex flex-col justify-between items-center z-2 hover:border-[#FF6B00]/50 transition-colors">
            <div class="flex flex-col items-center space-y-4 font-sans">
              <!-- Brand themed avatar with initials -->
              <div class="w-24 h-24 rounded-full border-2 border-[#FF6B00] bg-[#1a1a2e] flex items-center justify-center shadow-lg text-[#FF6B00] font-bebas text-3xl font-black">
                ${trainer.initials}
              </div>
              
              <!-- Name & Role -->
              <div class="space-y-1">
                <h3 class="font-bebas text-2xl tracking-wider text-white">${trainer.name}</h3>
                <p class="font-sans text-xs text-[#FF6B00] font-semibold uppercase tracking-widest">${trainer.role}</p>
              </div>
            </div>

            <!-- Quick highlights front -->
            <div class="w-full space-y-2 bg-black/60 p-3 rounded-lg border border-[#1a1a2e]">
              ${trainer.certifications.map((cert) => `
                <div class="text-[10px] text-stone-400 font-mono flex items-center justify-center gap-1">
                  <i data-lucide="check" class="w-3 h-3 text-[#FF6B00]"></i> ${cert}
                </div>
              `).join("")}
            </div>

            <p class="text-[10px] text-stone-500 uppercase tracking-widest animate-pulse font-semibold">
              HOVER TO REVEAL BIO
            </p>
          </div>

          <!-- BACK SIDE (with flip) -->
          <div class="absolute inset-0 w-full h-full backface-hidden rotate-y-180 card-dark border-2 border-[#FF6B00]/40 rounded-lg p-6 flex flex-col justify-between items-center z-1">
            <div class="space-y-4">
              <div class="text-center">
                <h4 class="font-bebas text-xl text-white tracking-widest">${trainer.name}</h4>
                <span class="text-[10px] font-mono text-[#FF6B00] uppercase">${trainer.role}</span>
              </div>
              <p class="font-sans text-xs text-stone-300 leading-relaxed text-justify">
                "${trainer.bio}"
              </p>
            </div>

            <!-- Social networks & action back links -->
            <div class="space-y-4 w-full">
              <div class="flex items-center justify-center gap-3">
                ${socialIconsHtml}
              </div>

              <a
                href="#contact"
                onclick="bookCoachSession('${trainer.name}')"
                class="py-2.5 w-full bg-[#FF6B00]/25 hover:bg-[#FF6B00] text-[#FF6B00] hover:text-black rounded-lg text-xs font-bold tracking-widest uppercase transition-all block text-center border border-[#FF6B00]/40"
              >
                BOOK COACHING
              </a>
            </div>

          </div>

        </div>
      </div>
    `;
  }).join("");
}

// Global book session helper
window.bookCoachSession = function(trainerName) {
  const messageBox = document.getElementById("form-message");
  if (messageBox) {
    messageBox.value = `Hi, I am interested in training with ${trainerName}. Please contact me to align details.`;
  }
};

function renderTestimonials() {
  const track = document.getElementById("testimonials-track");
  if (!track) return;

  // Render duplicated list arrays to configure smooth endless wrapping
  const repeated = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];
  track.innerHTML = repeated.map((t, idx) => {
    
    let starsHtml = "";
    for (let s = 0; s < t.rating; s++) {
      starsHtml += `<i data-lucide="star" class="w-4 h-4 fill-[#FF6B00] text-[#FF6B00]"></i>`;
    }

    return `
      <div class="w-[320px] sm:w-[380px] card-dark border-l-4 border-[#FF6B00] p-6 sm:p-8 shrink-0 flex flex-col justify-between whitespace-normal select-none shadow-md rounded-r-lg">
        <div class="space-y-4">
          <!-- Rating Stars -->
          <div class="flex items-center gap-1 flex-row">
            ${starsHtml}
          </div>
          
          <p class="font-sans text-stone-300 text-sm italic leading-relaxed">
            "${t.text}"
          </p>
        </div>

        <div class="mt-6 border-t border-white/5 pt-4 flex flex-col">
          <span class="font-bebas text-base text-white tracking-wider">${t.author}</span>
          <span class="text-[10px] text-stone-500 font-semibold uppercase">${t.role}</span>
        </div>
      </div>
    `;
  }).join("");
}

// ------------------------------------------------------------------
// Mobile Menu Controller
// ------------------------------------------------------------------
function setupMobileMenu() {
  const toggle = document.getElementById("mobile-menu-toggle");
  const menu = document.getElementById("mobile-menu");

  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const isClosed = menu.classList.contains("max-h-0");
    if (isClosed) {
      menu.classList.remove("max-h-0", "opacity-0", "pointer-events-none");
      menu.classList.add("max-h-96", "opacity-100");
      toggle.innerHTML = `<i data-lucide="x" class="w-7 h-7"></i>`;
    } else {
      menu.classList.remove("max-h-96", "opacity-100");
      menu.classList.add("max-h-0", "opacity-0", "pointer-events-none");
      toggle.innerHTML = `<i data-lucide="menu" class="w-7 h-7"></i>`;
    }
    if (window.lucide) {
      window.lucide.createIcons();
    }
  });

  // Close menu on selecting nav options
  const mobiles = document.querySelectorAll(".mobile-nav-link");
  mobiles.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("max-h-96", "opacity-100");
      menu.classList.add("max-h-0", "opacity-0", "pointer-events-none");
      toggle.innerHTML = `<i data-lucide="menu" class="w-7 h-7"></i>`;
      if (window.lucide) {
        window.lucide.createIcons();
      }
    });
  });
}

// ------------------------------------------------------------------
// Scroll reveal transitions
// ------------------------------------------------------------------
function setupScrollReveal() {
  const elements = document.querySelectorAll(".reveal-on-scroll");
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeSlideUp", "opacity-100");
          entry.target.classList.remove("opacity-0", "translate-y-8");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
  );

  elements.forEach((el) => {
    el.classList.add("transition-all", "duration-700", "ease-out");
    if (!el.classList.contains("opacity-100")) {
      el.classList.add("opacity-0", "translate-y-8");
    }
    observer.observe(el);
  });

  // Custom configuration for CountUp entries on visible views
  setupCountUps();
}

function setupCountUps() {
  const counts = document.querySelectorAll(".count-up");

  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const targetEl = entry.target;
        if (targetEl.dataset.animated === "true") return;
        targetEl.dataset.animated = "true";

        const targetVal = parseInt(targetEl.dataset.target, 10) || 0;
        const suffix = targetEl.dataset.suffix || "";
        const comma = targetEl.dataset.comma === "true";

        let startTimestamp = null;
        const duration = 1500;

        const animateStep = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          // Cubic-out easing
          const eased = 1 - Math.pow(1 - progress, 3);
          const currentCount = Math.floor(eased * targetVal);

          targetEl.innerText = (comma ? currentCount.toLocaleString('en-IN') : currentCount) + suffix;

          if (progress < 1) {
            window.requestAnimationFrame(animateStep);
          } else {
            targetEl.innerText = (comma ? targetVal.toLocaleString('en-IN') : targetVal) + suffix;
          }
        };

        window.requestAnimationFrame(animateStep);
        countObserver.unobserve(targetEl);
      }
    });
  }, { threshold: 0.1 });

  counts.forEach(el => countObserver.observe(el));
}

// ------------------------------------------------------------------
// Card 3D Tilt calculations
// ------------------------------------------------------------------
function setupTiltCards() {
  const cards = document.querySelectorAll(".tilt-card");

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((centerY - y) / centerY) * 12;
      const rotateY = ((x - centerX) / centerX) * 12;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      card.style.transition = "transform 0.1s ease-out, box-shadow 0.3s ease";
      card.style.boxShadow = "0 25px 50px -12px rgba(0,0,0,0.8), 0 0 40px rgba(255, 107, 0, 0.2)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
      card.style.transition = "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease";
      card.style.boxShadow = "none";
    });
  });
}

// ------------------------------------------------------------------
// Active link scroll highlighting
// ------------------------------------------------------------------
function setupActiveNavigation() {
  const sections = ["home", "about", "timings", "facilities", "pricing", "trainers", "contact"];
  const navLinks = document.querySelectorAll(".nav-link");

  const scrollTracker = () => {
    const currentScroll = window.scrollY + 220;
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const top = element.offsetTop;
        const height = element.offsetHeight;
        if (currentScroll >= top && currentScroll < top + height) {
          navLinks.forEach((link) => {
            if (link.dataset.section === section) {
              link.classList.add("text-[#FF6B00]");
              link.classList.remove("text-white/70", "hover:text-white");
            } else {
              link.classList.remove("text-[#FF6B00]");
              link.classList.add("text-white/70", "hover:text-white");
            }
          });
          break;
        }
      }
    }
  };

  window.addEventListener("scroll", scrollTracker);
}

// ------------------------------------------------------------------
// Contact / Guest Pass Submission Management
// ------------------------------------------------------------------
function setupContactForm() {
  const btn = document.getElementById("form-submit-btn");
  const entryBox = document.getElementById("booking-form-box");
  const successScreen = document.getElementById("success-screen");
  
  if (!btn || !entryBox || !successScreen) return;

  btn.addEventListener("click", () => {
    let hasErr = false;

    // Retrieve Inputs
    const nameInput = document.getElementById("form-name");
    const phoneInput = document.getElementById("form-phone");
    const emailInput = document.getElementById("form-email");
    const planInput = document.getElementById("form-plan");
    const messageInput = document.getElementById("form-message");

    const valName = nameInput ? nameInput.value.trim() : "";
    const valPhone = phoneInput ? phoneInput.value.trim() : "";
    const valEmail = emailInput ? emailInput.value.trim() : "";

    // Reset validations
    resetErrors();

    if (!valName) {
      showError("name", "Full name is required to book a session");
      hasErr = true;
    }

    if (!valPhone || valPhone.replace(/\D/g, "").length < 10) {
      showError("phone", "Provide a valid 10-digit smartphone number");
      hasErr = true;
    }

    if (!valEmail || !valEmail.includes("@")) {
      showError("email", "Provide a valid email address");
      hasErr = true;
    }

    if (hasErr) return;

    // Simulate booking submission progress loading
    btn.disabled = true;
    btn.innerHTML = `<span class="inline-block w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></span>`;

    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = `<span>CLAIM FREE TRIAL</span> <i data-lucide="arrow-right" class="w-5 h-5 text-black"></i>`;
      
      // Update success card view
      const randHex = Math.random().toString(36).substring(2, 7).toUpperCase();
      document.getElementById("success-name").innerText = valName;
      document.getElementById("success-passcode").innerText = `IF-GOLD-${randHex}`;

      entryBox.classList.add("hidden");
      successScreen.classList.remove("hidden");
      successScreen.scrollIntoView({ behavior: 'smooth' });
      if (window.lucide) {
        window.lucide.createIcons();
      }
    }, 1500);
  });

  const resetBtn = document.getElementById("reset-form-btn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      document.getElementById("form-name").value = "";
      document.getElementById("form-phone").value = "";
      document.getElementById("form-email").value = "";
      document.getElementById("form-message").value = "";

      successScreen.classList.add("hidden");
      entryBox.classList.remove("hidden");
    });
  }
}

function showError(field, msg) {
  const el = document.getElementById(`error-${field}`);
  const inp = document.getElementById(`form-${field}`);
  if (el) {
    el.innerText = msg;
    el.classList.remove("hidden");
  }
  if (inp) {
    inp.classList.add("border-red-500");
  }
}

function resetErrors() {
  ["name", "phone", "email"].forEach(field => {
    const el = document.getElementById(`error-${field}`);
    const inp = document.getElementById(`form-${field}`);
    if (el) {
      el.classList.add("hidden");
    }
    if (inp) {
      inp.classList.remove("border-red-500");
    }
  });
}

// ------------------------------------------------------------------
// Parallax Title Shift
// ------------------------------------------------------------------
function setupHeroParallax() {
  const container = document.getElementById("home");
  const textGroup = document.getElementById("parallax-title");

  if (!container || !textGroup) return;

  container.addEventListener("mousemove", (e) => {
    const bounding = container.getBoundingClientRect();
    const x = ((e.clientX - bounding.left) / bounding.width - 0.5) * 15;
    const y = ((e.clientY - bounding.top) / bounding.height - 0.5) * 15;

    textGroup.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  });

  container.addEventListener("mouseleave", () => {
    textGroup.style.transform = "translate3d(0, 0, 0)";
  });
}

// ------------------------------------------------------------------
// Three.js Scene Initialization and Loop configuration
// ------------------------------------------------------------------
function initializeThreeScene() {
  const canvasElement = document.getElementById("hero-canvas");
  if (!canvasElement || !window.THREE) return;

  const THREE = window.THREE;
  
  // Scene setup
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x0a0a0a, 0.02);

  // Camera setup
  const camera = new THREE.PerspectiveCamera(75, canvasElement.clientWidth / canvasElement.clientHeight, 0.1, 1000);
  camera.position.z = 6.5;

  // Renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: canvasElement,
    antialias: true,
    alpha: true
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(canvasElement.clientWidth, canvasElement.clientHeight);

  // Ambient & Lights
  const ambientLight = new THREE.AmbientLight(0x08080c);
  scene.add(ambientLight);

  const orangeLight = new THREE.PointLight(0xFF6B00, 3.5, 25);
  orangeLight.position.set(4, 3, 3);
  scene.add(orangeLight);

  const redLight = new THREE.PointLight(0xFF2D00, 2.5, 25);
  redLight.position.set(-4, -3, 3);
  scene.add(redLight);

  const whiteHighlight = new THREE.DirectionalLight(0xffffff, 0.6);
  whiteHighlight.position.set(0, 8, 2);
  scene.add(whiteHighlight);

  // Group for drift effect
  const mainGroup = new THREE.Group();
  scene.add(mainGroup);

  // Create Barbell Group
  const barbellGroup = new THREE.Group();
  mainGroup.add(barbellGroup);

  // Material Definitions
  const ironMaterial = new THREE.MeshStandardMaterial({
    color: 0x141416,
    roughness: 0.5,
    metalness: 0.9,
  });

  const chromeMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    emissive: 0xFF6B00,
    emissiveIntensity: 0.4,
    roughness: 0.15,
    metalness: 1.0,
  });

  // Shaft connector
  const barGeo = new THREE.CylinderGeometry(0.12, 0.12, 5.2, 16);
  const bar = new THREE.Mesh(barGeo, chromeMaterial);
  bar.rotation.z = Math.PI / 2;
  barbellGroup.add(bar);

  // Left Plate Assembly
  const plateL1Geo = new THREE.CylinderGeometry(1.0, 1.0, 0.28, 32);
  const plateL1 = new THREE.Mesh(plateL1Geo, ironMaterial);
  plateL1.position.x = -1.8;
  plateL1.rotation.z = Math.PI / 2;
  barbellGroup.add(plateL1);

  const plateL2Geo = new THREE.CylinderGeometry(0.8, 0.8, 0.24, 32);
  const plateL2 = new THREE.Mesh(plateL2Geo, ironMaterial);
  plateL2.position.x = -2.1;
  plateL2.rotation.z = Math.PI / 2;
  barbellGroup.add(plateL2);

  const plateL3Geo = new THREE.CylinderGeometry(0.58, 0.58, 0.2, 32);
  const plateL3 = new THREE.Mesh(plateL3Geo, ironMaterial);
  plateL3.position.x = -2.36;
  plateL3.rotation.z = Math.PI / 2;
  barbellGroup.add(plateL3);

  const collarLGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.12, 16);
  const collarL = new THREE.Mesh(collarLGeo, ironMaterial);
  collarL.position.x = -1.5;
  collarL.rotation.z = Math.PI / 2;
  barbellGroup.add(collarL);

  // Right Plate Assembly (Cloned)
  const plateR1 = plateL1.clone();
  plateR1.position.x = 1.8;
  barbellGroup.add(plateR1);

  const plateR2 = plateL2.clone();
  plateR2.position.x = 2.1;
  barbellGroup.add(plateR2);

  const plateR3 = plateL3.clone();
  plateR3.position.x = 2.36;
  barbellGroup.add(plateR3);

  const collarR = collarL.clone();
  collarR.position.x = 1.5;
  barbellGroup.add(collarR);

  // Floating structures around barbell
  const floaters = [];
  const glowFloaterMat = new THREE.MeshStandardMaterial({
    color: 0xFF5500,
    emissive: 0xFF1100,
    emissiveIntensity: 0.6,
    roughness: 0.2,
    metalness: 0.8
  });

  const steelFloaterMat = new THREE.MeshStandardMaterial({
    color: 0x1b1b22,
    roughness: 0.4,
    metalness: 0.95
  });

  for (let i = 0; i < 6; i++) {
    const isTorus = i % 2 === 0;
    const geom = isTorus 
      ? new THREE.TorusGeometry(0.42, 0.12, 8, 24)
      : new THREE.IcosahedronGeometry(0.45, 0);

    const mesh = new THREE.Mesh(geom, i === 2 || i === 5 ? glowFloaterMat : steelFloaterMat);
    
    // Disperse in spaces
    mesh.position.set(
      (Math.random() - 0.5) * 11,
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 4 - 1
    );
    
    // Velocity rotations
    mesh.rotVelocity = {
      x: (Math.random() - 0.5) * 0.015,
      y: (Math.random() - 0.5) * 0.015,
      z: (Math.random() - 0.5) * 0.015,
    };

    mainGroup.add(mesh);
    floaters.push(mesh);
  }

  // Particle System (Drifting Embers)
  const particleCount = 200;
  const particleGeo = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const velocities = [];

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 14; 
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 6;

    velocities.push({
      y: 0.012 + Math.random() * 0.018,
      x: (Math.random() - 0.5) * 0.006
    });
  }

  particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  // Circular glows
  const glowCanvas = document.createElement('canvas');
  glowCanvas.width = 16;
  glowCanvas.height = 16;
  const gCtx = glowCanvas.getContext('2d');
  if (gCtx) {
    const dGradient = gCtx.createRadialGradient(8, 8, 0, 8, 8, 8);
    dGradient.addColorStop(0, 'rgba(255, 107, 0, 1)');
    dGradient.addColorStop(0.35, 'rgba(255, 45, 0, 0.75)');
    dGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    gCtx.fillStyle = dGradient;
    gCtx.fillRect(0, 0, 16, 16);
  }
  const glowTexture = new THREE.CanvasTexture(glowCanvas);

  const pointsMaterial = new THREE.PointsMaterial({
    size: 0.16,
    map: glowTexture,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  const particlePoints = new THREE.Points(particleGeo, pointsMaterial);
  scene.add(particlePoints);

  // Interactivity tracking
  let targetX = 0;
  let targetY = 0;
  let currentMouseX = 0;
  let currentMouseY = 0;

  const trackMouseMove = (e) => {
    currentMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    currentMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  };
  window.addEventListener('mousemove', trackMouseMove);

  const resizeListener = () => {
    camera.aspect = canvasElement.clientWidth / canvasElement.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(canvasElement.clientWidth, canvasElement.clientHeight);
  };
  window.addEventListener('resize', resizeListener);

  const stopwatch = new THREE.Clock();

  const renderLoop = () => {
    requestAnimationFrame(renderLoop);
    const elapsed = stopwatch.getElapsedTime();

    // 1. Rotate main Barbell on all 3 Axes simultaneously
    barbellGroup.rotation.x += 0.007;
    barbellGroup.rotation.y += 0.011;
    barbellGroup.rotation.z += 0.004;

    // Subtle hover levitation
    barbellGroup.position.y = Math.sin(elapsed * 1.6) * 0.35;

    // 2. Control floating debris
    floaters.forEach((floater) => {
      const vel = floater.rotVelocity;
      floater.rotation.x += vel.x;
      floater.rotation.y += vel.y;
      floater.rotation.z += vel.z;
    });

    // 3. Move Glowing Orange particles (drift upward)
    const posArray = particleGeo.attributes.position.array;
    for (let i = 0; i < particleCount; i++) {
      posArray[i * 3 + 1] += velocities[i].y;
      posArray[i * 3] += velocities[i].x;

      if (posArray[i * 3 + 1] > 5) {
        posArray[i * 3 + 1] = -5;
        posArray[i * 3] = (Math.random() - 0.5) * 14;
      }
    }
    particleGeo.attributes.position.needsUpdate = true;

    // 4. Parallax orbit on mouse dragging offset
    targetX += (currentMouseX * 0.45 - targetX) * 0.06;
    targetY += (currentMouseY * 0.28 - targetY) * 0.06;
    mainGroup.rotation.y = targetX;
    mainGroup.rotation.x = targetY;

    camera.position.x = Math.sin(elapsed * 0.12) * 0.8;
    camera.position.y = Math.cos(elapsed * 0.08) * 0.4;
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
  };

  renderLoop();
}
