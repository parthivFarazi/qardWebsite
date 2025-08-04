"use client";
import { useEffect, useRef, useState } from 'react';
import styles from './TeamSection.module.css';

const teamMembers = [
  {
    name: "Ronak Agarwal",
    title: "Co-Founder & CEO",
    bio: "Georgia Tech computer science student, previously SWE intern @ Amazon & Chick-fil-A, and backend SWE @ Doordash",
    linkedin: "https://www.linkedin.com/in/ronak-agarwal9/",
    img: "./team/ronakAgarwal.jpeg", // update paths as needed
  },
  {
    name: "Vinay Govindaraju",
    title: "Co-Founder & CFO/COO",
    bio: "Georgia Tech economics student, previous investments and insights intern @ Tech Square Ventures, and corporate venture capital @ Catalyst by Wellstar",
    linkedin: "https://www.linkedin.com/in/vinaygovindaraju9/",
    img: "./team/vinay.jpeg",
  },
  {
    name: "Donovan Liao",
    title: "Co-Founder & CTO",
    bio: "Ohio State CS student, previously Gen AI @ Cleveland Clinic, Co-Founder of Binder Studio",
    linkedin: "https://www.linkedin.com/in/donovan-liao-7a7a03246/",
    img: "./team/donovanLiao.jpeg",
  }
];

export default function TeamSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only trigger once
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
        rootMargin: '50px', // Start loading 50px before the section comes into view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className={styles['team-section-overlay']}>
      <h2 className={styles['team-title']}>meet our team</h2>
      <div className={styles['team-cards']}>
        {teamMembers.map((member) => (
          <div className={styles['team-card']} key={member.name}>
            {isVisible && (
              <img
                src={member.img}
                alt={member.name}
                className={styles['team-card-img']}
                loading="lazy"
                decoding="async"
                width={96}
                height={96}
              />
            )}
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles['team-card-name']}
            >
              {member.name}
            </a>
            <div className={styles['team-card-role']}>{member.title}</div>
            <div className={styles['team-card-bio']}>{member.bio}</div>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles['team-card-linkedin']}
              aria-label="LinkedIn"
              title={`LinkedIn profile of ${member.name}`}
            >
              {/* Simple LinkedIn icon SVG, replace with react-icons if you want */}
              <svg width="30" height="30" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452H17.21v-5.569c0-1.328-.025-3.037-1.852-3.037-1.853 0-2.135 1.445-2.135 2.94v5.666H9.078V9h3.104v1.561h.044c.434-.82 1.495-1.684 3.077-1.684 3.29 0 3.894 2.164 3.894 4.981v6.594zM5.337 7.433c-1.002 0-1.812-.81-1.812-1.812a1.813 1.813 0 1 1 3.625 0c0 1.002-.81 1.812-1.813 1.812zm1.788 13.019H3.552V9h3.573v11.452z"/></svg>
            </a>
          </div>
        ))}
      </div>
      <div className={styles['team-cta']}>
        <div className={styles['team-cta-title']}>join our team</div>
        <div className={styles['team-cta-desc']}>
          We're always looking for passionate people to help us build the future of financial management.
        </div>
        <a
          href="https://www.qard.dev/careers"
          target="_blank"
          rel="noopener noreferrer"
          className={styles['team-cta-btn']}
        >
          View Open Positions
        </a>
      </div>
    </div>
  );
}
