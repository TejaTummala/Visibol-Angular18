import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {
  currentSlide = 0;
  isCarouselActive = false;
  isScrolling = false;
  scrollDelay = 1000;
  canScroll = false;
  cards = [
    {
      title: 'Incorporation',
      description: 'Turn your idea into a legal business entity — anywhere in the world. We help you get registered in the right jurisdiction, handle the paperwork, and ensure your startup is investor and market ready from day one.',
      image: 'assets/incorporation.png'
    },
    {
      title: 'Design & Branding',
      description: 'Full brand identity and user experience design that makes your startup stand out. From logo creation and brand guidelines to UI/UX design and marketing materials. We craft compelling visual stories that resonate with your target audience and build trust.',
      image: 'assets/designbranding.png'
    },
    {
      title: 'Development',
      description: 'End-to-end product development from MVP to scalable platforms. Our expert developers build robust, secure, and user-friendly applications using cutting-edge technologies. We deliver quality code with comprehensive testing and documentation.',
      image: 'assets/development.png'
    },
    {
      title: 'GTM & Sales',
      description: 'Dominate your market from day one with proven growth strategies. We create breakthrough go-to-market plans, build revenue-generating sales systems, and launch viral marketing campaigns that skyrocket customer acquisition.',
      image: 'assets/gtmsales.png'
    }
  ];


  currentIndex = 0;
  visibleCount = 3;       // Show 3 cards (left, center, right)
  cardWidth = 100 / 3;    // For translateX calculation

  testimonials = [
    {
      image: 'assets/cardfounder1.svg',
      name: 'Jane Doe',
      role: 'Founder',
      text: "We saw a 40% improvement in campaign performance through VISIBOL.",
      comment: 'VISIBOL helps me to finding my niche in business and strategy.'
    },
    {
      image: 'assets/cardfounder2.svg',
      name: 'John Smith',
      role: 'CEO',
      text: "VISIBOL transformed our chaotic startup into a $2.5M Series A hit - they were our lifeline",
      comment: 'Amazing execution. From logo to GTM, everything aligned.'
    },
    {
      image: 'assets/cardfounder3.svg',
      name: 'Amy Jones',
      role: 'CTO',
      text: "VISIBOL helps me to finding my niche in business and strategy.",
      comment: 'Beautiful UI/UX design with great conversion uplift.'
    },
    {
      image: 'assets/cardfounder1.svg',
      name: 'Chris Lee',
      role: 'Co-Founder',
      text: "Amazing execution. From logo to GTM, everything aligned.",
      comment: 'Impressed by the team and delivery quality!'
    }
  ];

  ngOnInit() {
    setTimeout(() => {
      this.canScroll = true;
    }, 600);
  }

  @HostListener('wheel', ['$event'])
  onWheel(event: WheelEvent) {
    if (!this.isCarouselActive || !this.canScroll || this.isScrolling) return;

    const direction = Math.sign(event.deltaY);
    const nextSlide = this.currentSlide + direction;

    if (nextSlide >= 0 && nextSlide < this.cards.length) {
      event.preventDefault(); // avoid native scroll
      this.isScrolling = true;
      this.currentSlide = nextSlide;

      setTimeout(() => {
        this.isScrolling = false;
      }, this.scrollDelay); // match transition time
    }
  }

  nextTestimonial() {
    if (this.currentIndex < this.testimonials.length - 2) {
      this.currentIndex++;
    }
  }

  prevTestimonial() {
    if (this.currentIndex >= 0) {
      this.currentIndex--;
    }
  }

}
