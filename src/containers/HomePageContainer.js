import React from 'react';
import {Link, Switch} from 'react-router-dom';

import PlotList from '../components/plots/PlotList';
import KnowHowList from '../components/knowHows/KnowHowList';
import Community from '../components/community/Community';
import PrivateRoute from '../components/user/PrivateRoute';
import PlotDetail from '../components/plots/PlotDetail';
import Bulletin from '../components/community/bulletin/Bulletin';
import Tip from '../components/community/tip/Tip';


// Renders weather widgets etc
// Renders buttons for areas of the site
// Renders some recent news bulletins (requires loop, find 3 most recent from bulletins prop, or something)
// Renders tip of the month
// Renders "hello {user}" message

// Props to pass down:
    // Plots = Plots & User
    // KnowHows = KnowsHows & User
    // Community = Bulletins, Jobs, User


// OTHER INFO:
    // It will probably be easier to actually make separate components for weather widgets, quick bulletins, tips etc
    // Makes the Rendering a bit simpler. Don't need to have all the HTML here under one giant conditional render

const HomePageContainer = ({currentUser, bulletins, tips}) =>{

    const committeeBulletins = bulletins.map((bulletin, index) => {
            if (bulletin.author.position !== "NONE" || "INACTIVE"){
                return(
                    <li key={index}><Bulletin bulletin={bulletin} currentUser={currentUser}/></li>
                )
            }
            return null;
        })

    return(
        <>
        <h2>This is our home page container</h2>
        {/* 
            We want to render our widgets etc here.
            And we want them conditionally 
            */}

        <Link to="/plots">
            <button>Plots</button>
        </Link>

        <Link to="/knowhows">
            <button>Know Hows</button>
        </Link>

        <Link to="/community">
            <button>Community</button>
        </Link>

        <div>
            <ul>
            {committeeBulletins}
            </ul>

            <div>
                <Tip tips = {tips} />
            </div>
        </div>
        </>
    )

}

export default HomePageContainer;