import { Fragment } from 'react'
import Feed from "../components/Feed";
import FeaturedContent from "../components/FeaturedContent";

const Home = () => {
    return (
        <Fragment>
            <Feed />
            <FeaturedContent />
        </Fragment>
    )
}

export default Home