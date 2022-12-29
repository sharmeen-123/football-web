import React, { useState, useEffect, useContext } from "react";
import Header from "../Components/Header";
import "../styles/font.css"
import axios from '../axios';
import { AuthContext } from "./ActiveUser"

export default function AddGroups() {
  
  let groupMembers = [];
  const [staticdata, setstaticData] = useState(false);
  const [players, setPlayers] = useState(false);
  const [admin, setAdmin] = useState(false);
  const[coach,setCoach] = useState(false);
  const [url, setUrl] = useState(false);
  const [image, setImage] = useState(false);
  const [name, setName] = useState(false);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState(false);
  const hiddenFileInput = React.useRef(null);
  const [searchMember, setSearchMember] = useState(false);
  const [arrayCopy, setArrayCopy] = useState(false);
  const [arrayCopyAdmin, setArrayCopyAdmin] = useState(false);
  const [arrayCopyCoach, setArrayCopyCoach] = useState(false)
  const [mem, setMem] = useState(false);
  const {id, setActiveId } = useContext(AuthContext);
  const [GroupAdded, setGroupAdded] = useState(false)
  

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    setImage(event.target.files[0].name);
    console.log(img)
    const data = new FormData();
    data.append("file", event.target.files[0]);
    data.append("upload_preset","player_image");
    //data.append("cloud_name","dyapmvalo");
    axios.post("https://api.cloudinary.com/v1_1/dyapmvalo/image/upload", data)
    .then((res) => {
      console.log(res.data.url)
      setUrl(res.data.url)
    })
    .catch((err) => {
     setError("Image not Selected")
    });
   
  };
  const handleNameChange = (event) => {
    // 👇 Get input value from "event"
    setName(event.target.value);
  };
  const handleSearchChange = (event) => {
    // 👇 Get input value from "event"
    console.log(id);
    setSearch(event.target.value);
    setArrayCopy([... players.filter(checkNames)]);
    handleAdminSearch();
  };
  const handleAdminSearch = (event) => {
   
    setArrayCopyAdmin([... admin.filter(checkNames)]);
    console.log(arrayCopyAdmin);
    handleCoachSearch()
    
  };
  const handleCoachSearch = (event) => {
   
    setArrayCopyCoach([... coach.filter(checkNames)]);
    console.log(arrayCopyCoach);
    
  };

  const checkNames = (val) => {
    console.log(search);
      if (val.name.toUpperCase().includes(search.toUpperCase())){
        console.log(search);
        return val.name;
      }
  }

  // uploading image on cloudanary
  const img = () => {
    
  }
  

   useEffect (()=>{
    console.log("in useeffect")
    allPlayers();
    Admin();
    
  },[])

  // getting players from database
  const allPlayers = async () => {
    console.log("in all players")
    let res = await axios.get('/player/getplayers')
    .then((res) => {
      if (res.data.data !== res.data.data.Prototype){
        setPlayers(res.data.data);
        allAdmin();

      }
        
    })
    .catch((error) => {
        console.log(error.response.data);
      })
  }

  // getting admins from database
  const allAdmin = async () => {
    let res = await axios.get('/admin/getadmin')
    .then((res) => {
      if (res.data.data !== res.data.data.Prototype){
        setAdmin(res.data.data);
        allCoach();


      } 
    })
    .catch((error) => {
        console.log(error.response.data);
      })
  }

  // getting coach from database
  const allCoach = async () => {
    let res = await axios.get('/coach/getcoach')
    .then((res) => {
      if (res.data.data !== res.data.data.Prototype){
        setCoach(res.data.data);
        console.log(coach)


      } 
    })
    .catch((error) => {
        console.log(error.response.data);
      })
  }

  // getting admin of group from database
  const Admin = async () => {
    console.log("in Admin")
    let res = await axios.get('/admin/getadminByEmail/'+id)
    .then((res) => {
      if (res.data.data !== res.data.data.Prototype){
        setMem(res.data.data);
        console.log(mem);
        console.log(res.data.data)

      } 
    })
    .catch((error) => {
        console.log(error.response.data);
      })
  }


  const createGroup = async () => {
    {
      groupMembers.push({
        status : "admin",
      member_id : mem._id,
      name : mem.name,
      email: mem.email,
      
      })
    players.map((val, ind) => {
      if (val.isPlayer === true){
        groupMembers.push({
          status : "player",
          member_id : val._id,
          image: val.image,
          name : val.name,
          email: val.email,
         
        })
      }
    })
    admin.map((val, ind) => {
      if (val.isAdmin === true){
        groupMembers.push({
          status : "admin",
        member_id : val._id,
        name : val.name,
        email: val.email,
        
        })
      }
    
    })
    coach.map((val, ind) => {
      if (val.isAdmin === true){
        groupMembers.push({
          status : "coach",
        member_id : val._id,
        name : val.name,
        email: val.email,
        
        })
      }
    
    })
    }
  
    let res = await axios.post('/groups/creategroup', {name: name, pic:url, members : groupMembers, admin_email: id})
    .then ((res)=> {
      setGroupAdded(true)
      setError(false)
    }
      
    )
    .catch((error) => {
        setError(error.response.data);
        console.log(error);
    })
  }

  // adding members in the group
  const addmembers = (index,title) => {
    if (title === "player"){
      let arr = [... players];
      arr[index].isPlayer = true;
      setPlayers(arr);
    }
    else if (title === "admin"){
      let arr = [... admin];
      arr[index].isAdmin = true;
      setAdmin(arr);
    }
    else if (title === "coach"){
      let arr = [... coach];
      arr[index].iscoach = true;
      setCoach(arr);
    }
    
  }

  // removing members from the group
  const removemember = (index, title) => {
    if (title === "player"){
      let arr = [... players];
      arr[index].isPlayer = false;
      setPlayers(arr);
    }
    else if (title === "admin"){
      let arr = [... admin];
      arr[index].isAdmin = false;
      setAdmin(arr);
    }
    else if (title === "coach"){
      let arr = [... coach];
      arr[index].iscoach = false;
      setCoach(arr);
    }

  }

  
  return (
    <>
      <div className="flex-col w-full">
        {/* {allPlayers} */}
        {/* Page Header */}
        <Header title={"Groups"} />
        {/* Title Of the Page */}

        <div className="flex divide-x">
          <div className="w-10/12 ml-8 mt-8  font-lexend">
            <h4 className="self-center mb-10 text-xl font-medium text-white font-lexend whitespace-nowrap    ">
              Create Group
            </h4>
            <div className="flex gap-5 items-center">
              <input
                type="text"
                className="bg-[#212121] font-lexend font-normal py-4 text-white text-sm rounded-md w-1/2 pl-6 p-2.5  placeholder-gray-400"
                placeholder="Group name"
                required=""
                onChange={handleNameChange}
              />
              <div
                onClick={handleClick}
                className="cursor-pointer font-lexend flex items-center gap-5 py-4 px-4 text-white/80 text-xs rounded-md  bg-[#212121]"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.625 0H4.375C1.95967 0.00224297 0.00224297 1.95967 0 4.375V30.625C0.00224297 33.0403 1.95967 34.9978 4.375 35H30.625C33.0403 34.9978 34.9978 33.0403 35 30.625V4.375C34.9978 1.95967 33.0403 0.00224297 30.625 0ZM4.375 33.25C2.92589 33.2484 1.7516 32.0741 1.75 30.625V21.4819L8.33472 14.8972C9.53175 13.7043 11.4682 13.7043 12.6653 14.8972L30.9834 33.2136C30.8651 33.23 30.7477 33.2499 30.625 33.25H4.375ZM33.25 30.625C33.2493 31.2871 32.9955 31.8848 32.5908 32.3465L20.4875 20.2443L22.3347 18.3972C23.5318 17.2043 25.4682 17.2043 26.6653 18.3972L33.25 24.9819V30.625ZM33.25 22.5074L27.9026 17.16C26.0223 15.2836 22.9777 15.2836 21.0974 17.16L19.2503 19.0071L13.9026 13.6599C11.9986 11.8416 9.00143 11.8416 7.09741 13.6599L1.75 19.0073V4.375C1.7516 2.92589 2.92589 1.7516 4.375 1.75H30.625C32.0741 1.7516 33.2484 2.92589 33.25 4.375V22.5074Z"
                    fill="white"
                  />
                </svg>

                <div>Upload Group Picture</div>
                <input
                  type="file"
                  ref={hiddenFileInput}
                  onChange={handleChange}
                  style={{ display: "none" }}
                />
              </div>
            </div>
              {error?(
                <div>
                <p className="text-red-600 text-lg text-left">{error}!</p>
                </div> 
              ):(
                <>
                  {image?(
                <div>
                <p className="text-white text-lg text-left ml-6">{image}</p>
                </div> 
              ):(
                <>
                 </>
              )}
                 </>
              )}
              
            <div className="mt-10 space-x-4">
              <button
                type="submit"
                className="inline-flex items-center py-2 px-8  text-sm font-normal text-black bg-white rounded-[4px] "
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center py-2 px-8  text-sm font-normal text-white bg-green-500 rounded-[4px] "
                onClick={createGroup}
              >
                Create
              </button>
            </div>
          </div>
          
          <div className="w-4/12 border-[#7E7E7E]">
            <div className="mr-10 ml-8 mt-8 mb-8">
            <h3 className="text-xl font-medium mb-10 text-white font-lexend">Add Members</h3>
              <div className="relative mb-8">
              
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5  text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  className="bg-[#212121] font-dm text-white text-sm rounded-md w-full pl-10 p-2.5  placeholder-gray-400"
                  placeholder="Search User"
                  required=""
                  onChange={handleSearchChange}
                />
              </div>
              <div>
              {arrayCopy || arrayCopyAdmin || arrayCopyCoach ? (<>
                {arrayCopy.map ((val, index) => {
                  return(
                    <div className="font-lexend flex items-center gap-3  mb-5">
                        <div className="flex-1">
                          <div className="flex">
                          <img
                        className=" w-10 h-10 rounded-full"
                        src={val.image}
                        alt = " "

                      />
                      <h4 className="self-center text-base font-normal whitespace-nowrap text-white ml-2  ">
                        {val.name}
                      </h4>
                          </div>
                        
                        </div>
                        {players[index].isPlayer === true ? (
                        <button 
                        onClick={() => removemember(index, "player")}
                        
                        >
                          <svg
                        className="ml-auto flex-1"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 0C4.0275 0 0 4.0275 0 9C0 13.9725 4.0275 18 9 18C13.9725 18 18 13.9725 18 9C18 4.0275 13.9725 0 9 0ZM13.5 9.9H4.5V8.1H13.5V9.9Z"
                            fill="#1DB954"
                          />
                        </svg>
                        </button>
                        
                      ) : (
                        <button onClick={() => addmembers(index, "player")}>
                          <svg
                        className="ml-auto flex-1"
                        
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 0C4.02912 0 0 4.02912 0 9C0 13.9709 4.02912 18 9 18C13.9709 18 18 13.9709 18 9C18 4.02912 13.9709 0 9 0ZM13.68 9.72H9.72V13.68C9.72 13.871 9.64414 14.0541 9.50912 14.1891C9.37409 14.3241 9.19096 14.4 9 14.4C8.80904 14.4 8.62591 14.3241 8.49088 14.1891C8.35586 14.0541 8.28 13.871 8.28 13.68V9.72H4.32C4.12904 9.72 3.94591 9.64414 3.81088 9.50912C3.67586 9.37409 3.6 9.19096 3.6 9C3.6 8.80904 3.67586 8.62591 3.81088 8.49088C3.94591 8.35586 4.12904 8.28 4.32 8.28H8.28V4.32C8.28 4.12904 8.35586 3.94591 8.49088 3.81088C8.62591 3.67586 8.80904 3.6 9 3.6C9.19096 3.6 9.37409 3.67586 9.50912 3.81088C9.64414 3.94591 9.72 4.12904 9.72 4.32V8.28H13.68C13.871 8.28 14.0541 8.35586 14.1891 8.49088C14.3241 8.62591 14.4 8.80904 14.4 9C14.4 9.19096 14.3241 9.37409 14.1891 9.50912C14.0541 9.64414 13.871 9.72 13.68 9.72Z"
                            fill="#FF7878"
                          />
                        </svg>
                        </button>
                        
                      )}
                    </div>
                  )
                })}

                {arrayCopyAdmin.map((val, index) => {
                  return (
                    <>
                    {val.email !== id}(<>
                      <div className="font-lexend flex items-center gap-3  mb-5 w-full">
                     
                      <div className="flex-1">
                          <div className="flex">
                          {val.image? (<>
                            <img
                        className=" w-10 h-10 rounded-full"
                        src={val.image}
                        alt = " "

                      /></>) : (<div className=" w-10 h-10 rounded-full bg-white"></div>)}
                          
                      <h4 className="self-center text-base font-normal whitespace-nowrap text-white ml-2  ">
                        {val.name}
                      </h4>
                          </div>
                        
                        </div>
                     {admin[index].isAdmin === true ? (<>
                       <button 
                         onClick={() => removemember(index, "admin")}>
                         <svg
                       className="ml-auto"
                         width="18"
                         height="18"
                         viewBox="0 0 18 18"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg"
                       >
                         <path
                           d="M9 0C4.0275 0 0 4.0275 0 9C0 13.9725 4.0275 18 9 18C13.9725 18 18 13.9725 18 9C18 4.0275 13.9725 0 9 0ZM13.5 9.9H4.5V8.1H13.5V9.9Z"
                           fill="#1DB954"
                         />
                       </svg>
                       </button>
                       </>):
                     (<>
                     <button 
                     className="flex-1"
                     onClick={() => addmembers(index, "admin")}>
                         <svg
                       className="ml-auto"
                       
                         width="18"
                         height="18"
                         viewBox="0 0 18 18"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg"
                       >
                         <path
                           d="M9 0C4.02912 0 0 4.02912 0 9C0 13.9709 4.02912 18 9 18C13.9709 18 18 13.9709 18 9C18 4.02912 13.9709 0 9 0ZM13.68 9.72H9.72V13.68C9.72 13.871 9.64414 14.0541 9.50912 14.1891C9.37409 14.3241 9.19096 14.4 9 14.4C8.80904 14.4 8.62591 14.3241 8.49088 14.1891C8.35586 14.0541 8.28 13.871 8.28 13.68V9.72H4.32C4.12904 9.72 3.94591 9.64414 3.81088 9.50912C3.67586 9.37409 3.6 9.19096 3.6 9C3.6 8.80904 3.67586 8.62591 3.81088 8.49088C3.94591 8.35586 4.12904 8.28 4.32 8.28H8.28V4.32C8.28 4.12904 8.35586 3.94591 8.49088 3.81088C8.62591 3.67586 8.80904 3.6 9 3.6C9.19096 3.6 9.37409 3.67586 9.50912 3.81088C9.64414 3.94591 9.72 4.12904 9.72 4.32V8.28H13.68C13.871 8.28 14.0541 8.35586 14.1891 8.49088C14.3241 8.62591 14.4 8.80904 14.4 9C14.4 9.19096 14.3241 9.37409 14.1891 9.50912C14.0541 9.64414 13.871 9.72 13.68 9.72Z"
                           fill="#FF7878"
                         />
                       </svg>
                       </button></>)
                     }
                    
                   </div></>): (<></>)
                    </>
                    
                  );
                })}
                {arrayCopyCoach? (<>
                  {arrayCopyCoach.map((val, index) => {
                  return (
                    <div className="font-lexend flex items-center gap-3  mb-5 w-full">
                     
                     <div className="flex-1">
                          <div className="flex">
                          {val.image? (<>
                            <img
                        className=" w-10 h-10 rounded-full"
                        src={val.image}
                        alt = " "

                      /></>) : (<div className=" w-10 h-10 rounded-full bg-white"></div>)}
                          
                      <h4 className="self-center text-base font-normal whitespace-nowrap text-white ml-2  ">
                        {val.name}
                      </h4>
                          </div>
                        
                        </div>
                      {admin[index].iscoach === true ? (<>
                        <button 
                          onClick={() => removemember(index, "coach")}>
                          <svg
                        className="ml-auto"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 0C4.0275 0 0 4.0275 0 9C0 13.9725 4.0275 18 9 18C13.9725 18 18 13.9725 18 9C18 4.0275 13.9725 0 9 0ZM13.5 9.9H4.5V8.1H13.5V9.9Z"
                            fill="#1DB954"
                          />
                        </svg>
                        </button>
                        </>):
                      (<>
                      <button 
                      className="flex-1"
                      onClick={() => addmembers(index, "coach")}>
                          <svg
                        className="ml-auto"
                        
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 0C4.02912 0 0 4.02912 0 9C0 13.9709 4.02912 18 9 18C13.9709 18 18 13.9709 18 9C18 4.02912 13.9709 0 9 0ZM13.68 9.72H9.72V13.68C9.72 13.871 9.64414 14.0541 9.50912 14.1891C9.37409 14.3241 9.19096 14.4 9 14.4C8.80904 14.4 8.62591 14.3241 8.49088 14.1891C8.35586 14.0541 8.28 13.871 8.28 13.68V9.72H4.32C4.12904 9.72 3.94591 9.64414 3.81088 9.50912C3.67586 9.37409 3.6 9.19096 3.6 9C3.6 8.80904 3.67586 8.62591 3.81088 8.49088C3.94591 8.35586 4.12904 8.28 4.32 8.28H8.28V4.32C8.28 4.12904 8.35586 3.94591 8.49088 3.81088C8.62591 3.67586 8.80904 3.6 9 3.6C9.19096 3.6 9.37409 3.67586 9.50912 3.81088C9.64414 3.94591 9.72 4.12904 9.72 4.32V8.28H13.68C13.871 8.28 14.0541 8.35586 14.1891 8.49088C14.3241 8.62591 14.4 8.80904 14.4 9C14.4 9.19096 14.3241 9.37409 14.1891 9.50912C14.0541 9.64414 13.871 9.72 13.68 9.72Z"
                            fill="#FF7878"
                          />
                        </svg>
                        </button></>)
                      }
                     
                    </div>
                  );
                })}
                </>) : (<></>)}
              </>) : (<>
              <div>
              {players !== false ? (<>
                  {players.map((val, index) => {
                    return (
                      <div className="font-lexend flex items-center gap-3  mb-5">
                        <div className="flex-1">
                          <div className="flex">
                          <img
                        className=" w-10 h-10 rounded-full"
                        src={val.image}
                        alt = " "

                      />
                      <h4 className="self-center text-base font-normal whitespace-nowrap text-white ml-2  ">
                        {val.name}
                      </h4>
                          </div>
                        
                        </div>
                      
                      {players[index].isPlayer === true ? (
                        <button 
                        onClick={() => removemember(index, "player")}
                        
                        >
                          <svg
                        className="ml-auto flex-1"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 0C4.0275 0 0 4.0275 0 9C0 13.9725 4.0275 18 9 18C13.9725 18 18 13.9725 18 9C18 4.0275 13.9725 0 9 0ZM13.5 9.9H4.5V8.1H13.5V9.9Z"
                            fill="#1DB954"
                          />
                        </svg>
                        </button>
                        
                      ) : (
                        <button onClick={() => addmembers(index, "player")}>
                          <svg
                        className="ml-auto flex-1"
                        
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 0C4.02912 0 0 4.02912 0 9C0 13.9709 4.02912 18 9 18C13.9709 18 18 13.9709 18 9C18 4.02912 13.9709 0 9 0ZM13.68 9.72H9.72V13.68C9.72 13.871 9.64414 14.0541 9.50912 14.1891C9.37409 14.3241 9.19096 14.4 9 14.4C8.80904 14.4 8.62591 14.3241 8.49088 14.1891C8.35586 14.0541 8.28 13.871 8.28 13.68V9.72H4.32C4.12904 9.72 3.94591 9.64414 3.81088 9.50912C3.67586 9.37409 3.6 9.19096 3.6 9C3.6 8.80904 3.67586 8.62591 3.81088 8.49088C3.94591 8.35586 4.12904 8.28 4.32 8.28H8.28V4.32C8.28 4.12904 8.35586 3.94591 8.49088 3.81088C8.62591 3.67586 8.80904 3.6 9 3.6C9.19096 3.6 9.37409 3.67586 9.50912 3.81088C9.64414 3.94591 9.72 4.12904 9.72 4.32V8.28H13.68C13.871 8.28 14.0541 8.35586 14.1891 8.49088C14.3241 8.62591 14.4 8.80904 14.4 9C14.4 9.19096 14.3241 9.37409 14.1891 9.50912C14.0541 9.64414 13.871 9.72 13.68 9.72Z"
                            fill="#FF7878"
                          />
                        </svg>
                        </button>
                        
                      )}
                    </div>
                    )
                  })}
                </>):(<></>)}
              </div>

              <div>
              {admin === false? (<>
              </>): (
                    <>
                     {admin.map((val, index) => {
                  
                  
                  return (
                    <div className="font-lexend flex items-center gap-3  mb-5 w-full">
                     {val.email === id?(<></>):(<>
                      <div className="flex-1">
                          <div className="flex">
                          {val.image? (<>
                            <img
                        className=" w-10 h-10 rounded-full"
                        src={val.image}
                        alt = " "

                      /></>) : (<div className=" w-10 h-10 rounded-full bg-white"></div>)}
                          
                      <h4 className="self-center text-base font-normal whitespace-nowrap text-white ml-2  ">
                        {val.name}
                      </h4>
                          </div>
                        
                        </div>
                      {admin[index].isAdmin === true ? (<>
                        <button 
                          onClick={() => removemember(index, "admin")}>
                          <svg
                        className="ml-auto"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 0C4.0275 0 0 4.0275 0 9C0 13.9725 4.0275 18 9 18C13.9725 18 18 13.9725 18 9C18 4.0275 13.9725 0 9 0ZM13.5 9.9H4.5V8.1H13.5V9.9Z"
                            fill="#1DB954"
                          />
                        </svg>
                        </button>
                        </>):
                      (<>
                      <button 
                      className="flex-1"
                      onClick={() => addmembers(index, "admin")}>
                          <svg
                        className="ml-auto"
                        
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 0C4.02912 0 0 4.02912 0 9C0 13.9709 4.02912 18 9 18C13.9709 18 18 13.9709 18 9C18 4.02912 13.9709 0 9 0ZM13.68 9.72H9.72V13.68C9.72 13.871 9.64414 14.0541 9.50912 14.1891C9.37409 14.3241 9.19096 14.4 9 14.4C8.80904 14.4 8.62591 14.3241 8.49088 14.1891C8.35586 14.0541 8.28 13.871 8.28 13.68V9.72H4.32C4.12904 9.72 3.94591 9.64414 3.81088 9.50912C3.67586 9.37409 3.6 9.19096 3.6 9C3.6 8.80904 3.67586 8.62591 3.81088 8.49088C3.94591 8.35586 4.12904 8.28 4.32 8.28H8.28V4.32C8.28 4.12904 8.35586 3.94591 8.49088 3.81088C8.62591 3.67586 8.80904 3.6 9 3.6C9.19096 3.6 9.37409 3.67586 9.50912 3.81088C9.64414 3.94591 9.72 4.12904 9.72 4.32V8.28H13.68C13.871 8.28 14.0541 8.35586 14.1891 8.49088C14.3241 8.62591 14.4 8.80904 14.4 9C14.4 9.19096 14.3241 9.37409 14.1891 9.50912C14.0541 9.64414 13.871 9.72 13.68 9.72Z"
                            fill="#FF7878"
                          />
                        </svg>
                        </button></>)
                      }
                     </>)}
                     
                    </div>
                  );
                })}</>
    
                  )}

{coach === false? (<>
              </>): (
                    <>
                     {coach.map((val, index) => {
                  
                  
                  return (
                    <div className="font-lexend flex items-center gap-3  mb-5 w-full">
                     
                     <div className="flex-1">
                          <div className="flex">
                          {val.image? (<>
                            <img
                        className=" w-10 h-10 rounded-full"
                        src={val.image}
                        alt = " "

                      /></>) : (<div className=" w-10 h-10 rounded-full bg-white"></div>)}
                          
                      <h4 className="self-center text-base font-normal whitespace-nowrap text-white ml-2  ">
                        {val.name}
                      </h4>
                          </div>
                        
                        </div>
                      {coach[index].iscoach === true ? (<>
                        <button 
                          onClick={() => removemember(index, "coach")}>
                          <svg
                        className="ml-auto"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 0C4.0275 0 0 4.0275 0 9C0 13.9725 4.0275 18 9 18C13.9725 18 18 13.9725 18 9C18 4.0275 13.9725 0 9 0ZM13.5 9.9H4.5V8.1H13.5V9.9Z"
                            fill="#1DB954"
                          />
                        </svg>
                        </button>
                        </>):
                      (<>
                      <button 
                      className="flex-1"
                      onClick={() => addmembers(index, "coach")}>
                          <svg
                        className="ml-auto"
                        
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 0C4.02912 0 0 4.02912 0 9C0 13.9709 4.02912 18 9 18C13.9709 18 18 13.9709 18 9C18 4.02912 13.9709 0 9 0ZM13.68 9.72H9.72V13.68C9.72 13.871 9.64414 14.0541 9.50912 14.1891C9.37409 14.3241 9.19096 14.4 9 14.4C8.80904 14.4 8.62591 14.3241 8.49088 14.1891C8.35586 14.0541 8.28 13.871 8.28 13.68V9.72H4.32C4.12904 9.72 3.94591 9.64414 3.81088 9.50912C3.67586 9.37409 3.6 9.19096 3.6 9C3.6 8.80904 3.67586 8.62591 3.81088 8.49088C3.94591 8.35586 4.12904 8.28 4.32 8.28H8.28V4.32C8.28 4.12904 8.35586 3.94591 8.49088 3.81088C8.62591 3.67586 8.80904 3.6 9 3.6C9.19096 3.6 9.37409 3.67586 9.50912 3.81088C9.64414 3.94591 9.72 4.12904 9.72 4.32V8.28H13.68C13.871 8.28 14.0541 8.35586 14.1891 8.49088C14.3241 8.62591 14.4 8.80904 14.4 9C14.4 9.19096 14.3241 9.37409 14.1891 9.50912C14.0541 9.64414 13.871 9.72 13.68 9.72Z"
                            fill="#FF7878"
                          />
                        </svg>
                        </button></>)
                      }
                     
                    </div>
                  );
                })}</>
    
                  )}
                
                
                </div>
                
                </>)}
                
              </div>
            </div>
          </div>
        </div>
      </div>
       {/* add group popup */}
<div
        id="defaultModal"
        
        class={
          !GroupAdded
            ? "hidden"
            : " flex absolute top-0 right-0 left-0 z-50 w-full h-full  bg-black/70  bg-opacity-5 justify-center items-center"
        }
      >
        <div class="relative p-4 w-full max-w-lg ">
          <div class="relative bg-gradient-to-r from-[#000000]/24 to-[#000000]/81 backdrop-blur-[5px]  border-[border] border-2   rounded-2xl px-4 py-2">
            <button
              onClick={() => setGroupAdded(false)}
              type="button"
              class="text-gray-400 bg-white bg-transparent rounded-full  p-0.5 ml-auto flex items-center "
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div className="pt-20 pb-20">
            <h3 class="text-lg mt-4 mb-4 text-center font-normal font-lexend text-white">
              GROUP CREATED!
            </h3>
            </div>
              
          </div>
        </div>

        
      </div>
    </>
  );
}
