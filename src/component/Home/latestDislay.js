import React from 'react';
import { Link } from 'react-router-dom'


const LatestNews = (props) => {
    const NewsRender = ({ latdata }) => {
        if (latdata) {
            return latdata.map((data) => {
                return (

                    <Link to='/' className="item">
                        <div className="image_cover">
                            <div className="description">


                                <div>{data.title}</div>
                                <div>£{data.unit_price}/unit</div>
                                <div>{data.kcal_per_100g}kcal</div>
                                <div><button type="submit">
                                    1
                            </button></div>
                                <div><button type="submit"
                                    className="btn btn-success">
                                    Add
                            </button></div>
                            </div>
                        </div>
                    </Link>

                )
            }

            )
        }

    }
    return (
        <div className="home-latest">
            {NewsRender(props)}
        </div>

    )
}

export default LatestNews;