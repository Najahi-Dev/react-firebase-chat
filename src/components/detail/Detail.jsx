import "./detail.css"

const Detail = () => {
  return (
    <div className='detail'>
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Jane Doe</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & Help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://i.pinimg.com/736x/7b/d3/3a/7bd33aab18ce290589b7db2278a2e886.jpg" alt="" />
                <span>photo_2025_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon"/>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://i.pinimg.com/736x/7b/d3/3a/7bd33aab18ce290589b7db2278a2e886.jpg" alt="" />
                <span>photo_2025_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon"/>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://i.pinimg.com/736x/7b/d3/3a/7bd33aab18ce290589b7db2278a2e886.jpg" alt="" />
                <span>photo_2025_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon"/>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://i.pinimg.com/736x/7b/d3/3a/7bd33aab18ce290589b7db2278a2e886.jpg" alt="" />
                <span>photo_2025_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon"/>
            </div>
            
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block User</button>
      </div>
    </div>
  )
}

export default Detail