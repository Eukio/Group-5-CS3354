import utdLLC from '../assets/createClub.svg';
import clubBanner from '../assets/utd_club_banner.png';
import atec from '../assets/createEvent.svg';
import sciences from '../assets/createPost.svg';
import '../styles/clubsPage.css';

function ClubsPage() {
    return (
        <>  
        <div style={{ maxWidth: "1920px", margin: "0 auto", padding: "1rem" }}>
            <div class="home-page">
                <img
                    class="utd-01-2560-x-1440-2560-x-1440-1"
                    src={clubBanner}
                />
                <div class="rectangle-10">
                    <div class="welcome-april-smith">
                    UTD Clubs
                    </div>
                </div>
                
                <img class="utd-atec-1024-x-576" src={atec}/>
                <img class="rectangle-13"/>
                <img class="utd-sciences-02" src={sciences}/>
                <img class="rectangle-12"/>
                <div class="create-club">Chess Club</div>
                <div class="button">
                    <div class="text-box">
                    <div class="rectangle-8"></div>
                    <div class="login">Explore</div>
                    </div>
                </div>
                
                <img class="utd-live-learn-community-0" src={utdLLC}/>
                <div class="rectangle-11"></div>
                <div class="create-a-post">Debate Club</div>
                <div class="button2">
                    <div class="text-box">
                    <div class="rectangle-8"></div>
                    <div class="login">Explore</div>
                    </div>
                </div>
                <div class="create-an-event">Soccer Club</div>
                <div class="button3">
                    <div class="text-box">
                    <div class="rectangle-8"></div>
                    <div class="login">Explore</div>
                    </div>
                </div>
                <div class="button4">
                    <div class="text-box">
                    <div class="rectangle-8"></div>
                    <div class="login">Search for Clubs</div>
                    </div>
                </div>
                
            </div>

            <br />
        </div>
        </>
    );
}

export default ClubsPage;