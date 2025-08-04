'use client';

import styles from './ScrollKeywordsSection.module.css';

const keywords = [
  {
    label: 'Set it and forget it',
    description:
      'we select the best card for every purchase in REAL-TIME, maximizing your rewards with zero effort',
  },
  {
    label: 'Smarter spending',
    description:
      'our AI ensures you get the highest rewards rate for every transaction, making your money work harder',
  },
  {
    label: 'Never miss a perk',
    description:
      "automatically opt-in to new rewards and credit card perks as soon as they're released",
  },
];

export default function ScrollKeywordsSection() {
  return (
    <section className={styles.container}>
      {keywords.map(({ label, description }) => (
        <div key={label} className={styles.keywordItem}>
          <h2 className={styles.tagline}>{label}</h2>
          <p className={styles.description}>{description}</p>
        </div>
      ))}
    </section>
  );
}
