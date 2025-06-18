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
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0'
    },
    {
      title: 'Design & Branding',
      description: 'Full brand identity and user experience design that makes your startup stand out. From logo creation and brand guidelines to UI/UX design and marketing materials. We craft compelling visual stories that resonate with your target audience and build trust.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c'
    },
    {
      title: 'Development',
      description: 'End-to-end product development from MVP to scalable platforms. Our expert developers build robust, secure, and user-friendly applications using cutting-edge technologies. We deliver quality code with comprehensive testing and documentation.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f'
    },
    {
      title: 'GTM & Sales',
      description: 'Dominate your market from day one with proven growth strategies. We create breakthrough go-to-market plans, build revenue-generating sales systems, and launch viral marketing campaigns that skyrocket customer acquisition.',
      image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312'
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
}
