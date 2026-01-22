import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#f8f8f8', padding: '40px 0', marginTop: '50px' }}>
            <div className="container">
                <div className="flex-between" style={{ alignItems: 'flex-start', flexWrap: 'wrap' }}>
                    <div>
                        <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="Zomato" style={{ height: '28px', marginBottom: '20px' }} />
                    </div>

                    <div style={{ display: 'flex', gap: '50px', flexWrap: 'wrap' }}>
                        <div>
                            <h4 style={{ marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>About Zomato</h4>
                            <ul style={{ color: '#696969', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                                <li>Who We Are</li>
                                <li>Blog</li>
                                <li>Work With Us</li>
                                <li>Investor Relations</li>
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>Learn More</h4>
                            <ul style={{ color: '#696969', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                                <li>Privacy</li>
                                <li>Security</li>
                                <li>Terms</li>
                                <li>Sitemap</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr style={{ margin: '30px 0', borderColor: '#e8e8e8', opacity: 0.5 }} />
                <p style={{ color: '#828282', fontSize: '0.8rem' }}>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2026 © Zomato™ Ltd. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
