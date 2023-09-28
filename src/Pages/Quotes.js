import React from 'react';

const quoteStyle = {
  width: '70%',
  margin: 'auto',
  transform: 'translateY(120px)',
  textAlign: 'justify',
};

const Quote = () => (
  <>
    <main style={quoteStyle}>
      <p>
        Mathematics are the result of mysterious powers
        which no one understands, and which the unconscious
        recognition of beauty must play an important part.
        Out of an infinity of designs a mathematician chooses
        one pattern for beauty’s sake and pulls it down to earth.
        <br />
        <span style={{ fontWeight: '600', float: 'right' }}>
          — Kevayin
          <small style={{ color: 'brown' }}> playing with react</small>
        </span>
      </p>
    </main>
  </>
);
export default Quote;
