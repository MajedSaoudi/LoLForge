import React from 'react'
import './FAQ.css';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
function FAQ() {
  return (
    <>
    <Navbar />
    <div className='flex justify-center bg-black text-white'>
     <div className='w-[1000px] p-3 mt-10'>
        <div className='Champions-header mb-6'>
        <h1 >Frequently Asked Questions</h1>
        </div>
        <div className='Faq-par'>
        <h1>Why LoLForge?</h1>
        <p>LoLForge is the most accurate League of Legends Statistics site. If there are 30 seconds left in champ select and you have no idea what runes to take, LoLForge is your quick and easy solution to win the lane. If you dont even know what champion to play, LoLForge provides the most up to date champion tier lists and win rates, as well as counters to whatever your lane opponent picked. If you need do a deep dive on champion data to find out the most optimal builds and counters, LoLForge is your most reliable source of data.</p>
        </div>
        <div className='Faq-par'>
        <h1>What is unique about LoLForge?</h1>
        <p>We hold ourselves to the standard of having the best UI/UX and the most granular data. From the UI/UX perspective, we make it easy for you to navigate to whatever you want to see on LoLForge. Every site claims to analyze every match. LoLForge takes it one step further by also allowing you to see the most granular data. Filter by whatever you care about, and we’ll show you exactly how many matches we’ve analyzed, and the insights we have derived from those matches.</p>
        </div>
        <div className='Faq-par'>
            <h1>How do I navigate on LoLForge?</h1>
            <p>We prioritize ease of use and user experience. In other words making sure you get the data you’re looking for with the least amount of clicks. When you first navigate to LoLForge you’re met with our search bar. This search bar is your portal to all your champion build needs. Type any champion name or common nickname, like “Twisted Fate” or “TF” for example, and as soon as you hit enter we take you to the LoLForge recommended build. If that isn’t your cup of tea, try “Twisted Fate Pro Build” or “Twisted Fate Counter” to help navigate you directly in one click to the other sections of our site. For every champion, we offer a recommended build, a list of recent pro builds, champion counters, matchups, duos, detailed items and runes, and a whole lot more.</p>
        </div>
        <div className='Faq-par'>
            <h1>What is the LoLForge Recommended Build?</h1>
            <p>The LoLForge Recommended Build is an algorithmic approach to finding an optimal build for your specific situation. We analyze every game that fits the selected filter criteria, and return the most frequent build that holds a higher win rate than the baseline win rate for your selected champion. By default, the filter criteria is the Most Common Lane Assignment, Plat+ Ranking, All Regions, Current Patch, and Against All Champions.</p>
        </div>
        <div className='Faq-par'>
            <h1>What filtering options does LoLForge offer?</h1>
            <p>We offer the most granular data available at LoLForge. We offer filters in game type, role, rank, region and patch. For our Recommended Builds, we also allow you to define a lane opponent. For example, playing Zed vs Ahri is different than Zed vs Talon. Change the “Vs Champion” filter to look at what is best in your specific matchup. On our Tier lists, Matchups, and Duos pages we also offer the “show all champions” filter. Which allows you to see every champion’s performance in a role or context of your choosing. While some players only care about Plat+ Korean data, we understand that other users want to see data applicable to them, so we made sure that players could see data exclusive to their rank and region.</p>
        </div>
        <div className='Faq-par'>
            <h1>How do you determine champion roles?</h1>
            <p>We start with the Riot API which assigns each champion in a game to a role. However, the reported roles are not always correct. This fact always surprises people. However, if you think about your personal experience with level 1 fiesta invades, role swaps, junglers forgetting smite and a host of other factors, it is easy to see how the API can be wrong at times. We created an algorithm that mimics a human heuristic for determining roles and we believe the algorithm is correct 99.9% of the time. This algorithm is what allows us to confidently provide real statistical insight into Korean bronze Vayne jungle builds. We don’t care how sparse the data is because we are showing you exactly what happened. You can fact check for yourself by perusing our pro builds section for any champion. In each match, we have a post match section and we list the players involved in role order. First player is top, next is jungle, then mid, then adc and lastly support. You will see that our classifications always pass the eye test, regardless of whether there were two smites, no smites, 3 teleports, 4 marksmen or anything other fiesta you can think of.</p>
        </div>
        <div className='Faq-par'>
            <h1>What are your champion counters and how are they calculated?</h1>
            <p>Our champion counters are what a particular champion is losing against the most on a particular patch. We calculate this by analyzing every game a particular champion is played, and then displaying which champions are winning the most and by how much.</p>
        </div>
     </div>
    </div>
    
    <Footer/>
    </>
  )
}

export default FAQ