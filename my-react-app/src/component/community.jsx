import './community.scss'
import view from "../component/res/Avatar.png"
import view3 from "../component/res/Avatar.jpg"
import view1 from "../component/res/backpack.svg"
import view2 from "../component/res/Star.svg"
function Community() {
    return(
        <div>
            <h1>What our community has to say</h1>
            <div className='community'>
                <div className='katherine-moss'>
                    <div className='katherine'>
                        <div>
                            <img src={view} className='lead' alt="view-2"/>
                        </div>
                        <div>
                            <div className='moss'>
                                <h3>Kathine Moss</h3>
                                <div className='microsoft'>
                                    <img src={view1} className='product' alt="view-2"/>
                                    <p>UX Lead at Microsoft</p>
                                </div>
                            </div>
                            <div className='star'>
                                <img src={view2} className='product' alt="view-2"/>
                                <img src={view2} className='product' alt="view-2"/>
                                <img src={view2} className='product' alt="view-2"/>
                                <img src={view2} className='product' alt="view-2"/>
                                <img src={view2} className='product' alt="view-2"/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='community-note'>
                            Great chat with Jocelyn! She helped me rethink metrics (product, UX/UI business) when working on a project. 
                            I like that she had articles and resources ready to share. the fact that she showed openness for future conversions is also amazing.
                        </p>
                    </div>
                    <div className='john-doe'>
                        <div>
                            <img src={view3} className='john' alt="view-2"/>
                        </div>
                        <div>
                            <h3>John Doe</h3>
                            <p>UI/UX designetr, Juno</p>
                        </div>
                    </div>
                </div>
                <div className='katherine-moss'>
                    <div className='katherine'>
                        <div>
                            <img src={view} className='lead' alt="view-2"/>
                        </div>
                        <div>
                            <div className='moss'>
                                <h3>Kathine Moss</h3>
                                <div className='microsoft'>
                                    <img src={view1} className='product' alt="view-2"/>
                                    <p>UX Lead at Microsoft</p>
                                </div>
                            </div>
                            <div className='star'>
                                <img src={view2} className='product' alt="view-2"/>
                                <img src={view2} className='product' alt="view-2"/>
                                <img src={view2} className='product' alt="view-2"/>
                                <img src={view2} className='product' alt="view-2"/>
                                <img src={view2} className='product' alt="view-2"/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='community-note'>
                            Great chat with Jocelyn! She helped me rethink metrics (product, UX/UI business) when working on a project. 
                            I like that she had articles and resources ready to share. the fact that she showed openness for future conversions is also amazing.
                        </p>
                    </div>
                    <div className='john-doe'>
                        <div>
                            <img src={view3} className='john' alt="view-2"/>
                        </div>
                        <div>
                            <h3>John Doe</h3>
                            <p>UI/UX designetr, Juno</p>
                        </div>
                    </div>
                </div>
                <div className='katherine-moss'>
                    <div className='katherine'>
                    <div>
                        <img src={view} className='lead' alt="view-2"/>
                    </div>
                    <div>
                        <div className='moss'>
                            <h3>Kathine Moss</h3>
                            <div className='microsoft'>
                                <img src={view1} className='john' alt="view-2"/>
                                <p>UX Lead at Microsoft</p>
                            </div>
                        </div>
                        <div className='star'>
                            <img src={view2} className='product' alt="view-2"/>
                            <img src={view2} className='product' alt="view-2"/>
                            <img src={view2} className='product' alt="view-2"/>
                            <img src={view2} className='product' alt="view-2"/>
                            <img src={view2} className='product' alt="view-2"/>
                        </div>
                    </div>
                    </div>
                    <div>
                        <p className='community-note'>
                            Great chat with Jocelyn! She helped me rethink metrics (product, UX/UI business) when working on a project. 
                            I like that she had articles and resources ready to share. the fact that she showed openness for future conversions is also amazing.
                        </p>
                    </div>
                    <div className='john-doe'>
                        <div>
                            <img src={view3} className='john' alt="view-2"/>
                        </div>
                        <div>
                            <h3>John Doe</h3>
                            <p>UI/UX designetr, Juno</p>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}
export default Community;