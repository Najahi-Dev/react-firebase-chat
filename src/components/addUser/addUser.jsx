import "./addUser.css";

const AddUser = () => {
  return (
    <div className='addUser'>
        <form>
            <input type="text" placeholder="Username" name="username"/>
            <button>Search</button>
        </form>
        <div className="user"></div>
    </div>
  )
}

export default AddUser