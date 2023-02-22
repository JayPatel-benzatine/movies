import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SingleContent from '../../components/SingleContent/SingleContent'
import './Trending.css'
import CustomPagination from '../../components/Pagination/CustomPagination'

const Trending = () => {
const [page, setPage] = useState(1)
  const [content, setContent] = useState([]);

  const fetchData = async () => {
    await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`)
      .then((r) => setContent(r.data.results))
  }
  useEffect(() => {
    fetchData()
    // eslint-disable-next-line
  }, [page])

  return (
    <div>
      <span className="pageTitle">Trending Today</span>
      <div className="trending">
        {
          content && content.map((c) => {
            return (<>
            
              <SingleContent
                key={c.id}
                id={c.id}
                poster={c.poster_path}
                title={c.title || c.name}
                date={c.first_air_date || c.release_date}
                media_type={c.media_type}
                vote_average={c.vote_average} />
            </>)

          })
        }
      </div>
      <CustomPagination setPage={setPage}  />
    </div>
  )
}

export default Trending