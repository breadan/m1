import React, {Fragment} from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Projects = () => {







    return <Fragment>
        <div className="row">
            <div className="col-3">
                <Link to = 'countyGuid'>county Guid</Link>
                <br/>
                <Link to = 'mob'>mob Design</Link>
                <br/>

                <Link to = 'doc'>Doc Design</Link>
                <br/>

                <Link to = 'train'>Train Design</Link>
                <br/>

                <Link to = 'gussies'>Gussies Design</Link>
                <br/>

                <Link to = 'try'>Try Design</Link>
                <br/>

                <Link to = 'try2'>Try2 Design</Link>
                <br/>

                <Link to = 'exercise'>Exercise Design</Link>
                <br/>

                <Link to = 'exercisers'>Exercise Function</Link>
                <br/>

                <Link to = 'exercisersparent'>Exercise Function Parent</Link>
                <br/>

                <Link to = 'showData'>Show Data</Link>
            </div>
            <div className="col-9">

                {/* Outlet */}
                <Outlet/>
                
            </div>
        </div>




    </Fragment>
} 