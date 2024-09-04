// import React from 'react';

// function TabsComponent({ activeTab, setActiveTab }) {
//     return (
//         <div style={styles.widget}>
//             <div style={styles.tabContainer}>
//                 <button
//                     style={{
//                         ...styles.tabButton,
//                         ...(activeTab === 'About Me' ? styles.activeTab : styles.inactiveTab)
//                     }}
//                     onClick={() => setActiveTab('About Me')}
//                 >
//                     About Me
//                 </button>
//                 <button
//                     style={{
//                         ...styles.tabButton,
//                         ...(activeTab === 'Experiences' ? styles.activeTab : styles.inactiveTab)
//                     }}
//                     onClick={() => setActiveTab('Experiences')}
//                 >
//                     Experiences
//                 </button>
//                 <button
//                     style={{
//                         ...styles.tabButton,
//                         ...(activeTab === 'Recommended' ? styles.activeTab : styles.inactiveTab)
//                     }}
//                     onClick={() => setActiveTab('Recommended')}
//                 >
//                     Recommended
//                 </button>
//             </div>
//             <div style={styles.tabContent}>
//                 {activeTab === 'About Me' && (
//                     <div>
//                         <p>Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.</p>
//                         <p style={{ marginTop: '16px' }}>I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters...</p>
//                     </div>
//                 )}
//                 {activeTab === 'Experiences' && (
//                     <div>
//                         <p>Here are my experiences...</p>
//                     </div>
//                 )}
//                 {activeTab === 'Recommended' && (
//                     <div>
//                         <p>Here are my recommendations...</p>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }

// const styles = {
//     widget: {
//         padding: '16px',
//         borderRadius: '12px',
//         backgroundColor: '#333',
//         boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
//     },
//     tabContainer: {
//         display: 'flex',
//         marginBottom: '16px',
//     },
//     tabButton: {
//         padding: '12px 24px',
//         borderRadius: '999px',
//         fontWeight: '600',
//         cursor: 'pointer',
//     },
//     activeTab: {
//         backgroundColor: '#444',
//         color: '#FFF',
//     },
//     inactiveTab: {
//         backgroundColor: '#555',
//         color: '#AAA',
//     },
//     tabContent: {
//         color: '#CCC',
//     },
// };

// export default TabsComponent;
