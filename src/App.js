import "./App.scss";
import TextField from "@mui/material/TextField";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWaveSquare } from "@fortawesome/free-solid-svg-icons";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { faFileArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import photo from "./assest/photo.jpeg";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faBookMedical } from "@fortawesome/free-solid-svg-icons";


function App() {
  const pdfFiles = [
    {
      id: 1,
      text: "Check Up Results.pdf",
      image: faFile,
    },
    {
      id: 2,
      text: "Check Up Results.pdf",
      image: faFile,
    },
    {
      id: 3,
      text: "Check Up Results.pdf",
      image: faFile,
    },
    {
      id: 4,
      text: "Check Up Results.pdf",
      image: faFile,
    },
  ];
  const iconInfo = [
    {
      id:1,
      icon : faWaveSquare,
      text : "PULSE"
    },
    {
      id:2,
      icon : faAdd,
      text : "NEW"
    },
    {
      id:3,
      icon : faUser,
      text : "PATIENT"
    },
    {
      id:4,
      icon : faFolderOpen,
      text : "FOLDER"
    },
    {
      id:5,
      icon : faFileArrowUp,
      text : "UPLOAD"
    },
    {
      id:6,
      icon : faBook,
      text : "REPORT"
    },
    {
      id:7,
      icon : faGear,
      text : "SETTING"
    },
    {
      id:8,
      icon : faRightFromBracket,
      text : "LOGOUT"
    }
  ]
  return (
    <div className="App">
      <aside>
        <div className="sidebar">
          {
            iconInfo.map((icon)=>{
              return(
                <a href="#" key={icon.id}>
            <FontAwesomeIcon
              className="icons"
              icon={icon.icon}
            ></FontAwesomeIcon>
            <h4>{icon.text}</h4>
          </a>
              )
            })
          }
        </div>
      </aside>
      <section className="middleContainer">
        <div>
          <div>
            <img src={photo} alt="img not found" />
            <p className="name" style={{lineHeight:0}}>Diane Cooper</p>
            <p className="email" style={{lineHeight:1}}>diane.cooper@example.com</p>
          </div>
          <div className="patientInfoSection">
            <div>
              <p style={{lineHeight:0}}  className="report">15</p>
              <p>Past</p>
            </div>
            <div>
              <p style={{lineHeight:0}}  className="report">02</p>
              <p>Upcoming</p>
            </div>
          </div>
        </div>
        <button className="send-btn">Send Message</button>
        <div className="middleBottom">
          <p className="FileHeading">File/Documents</p>
          <div>
            {pdfFiles.map((pdf) => {
              return (
                <div key={pdf.id} className="pdfFile">
                  <FontAwesomeIcon icon={pdf.image} className="pdfImage" />
                  <p >{pdf.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="rightContainer">
        <div className="rightTop">
        <TextField
          id="filled-read-only-input"
          label="Gender"
          value="Female" className="valueAttribute"
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />   
        <TextField
          id="filled-read-only-input"
          label="Birthday" className="valueAttribute"
          value="Feb24th, 1997"
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-read-only-input"
          label="Phone Number" className="valueAttribute"
          value="(239)555-0108"
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-read-only-input"
          label="Registration Date" className="valueAttribute"
          value="Feb24th, 1997"
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-read-only-input"
          label="Street Address" className="valueAttribute"
          value="JL.Diponegoro No.21"
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-read-only-input"
          label="City" className="valueAttribute"
          value="Cilacap"
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-read-only-input"
          label="Zip Code" className="valueAttribute"
          value="655849"
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-read-only-input"
          label="Member Status" className="valueAttribute"
          value="Active Member"
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
        
            </div>
            <div className="rightMiddle">
              <p className="para para1" style={{backgroundColor:"whitesmoke",color: "#4469BA"}}>Upcoming Appointments</p>
              <p className="para">Past Appointments</p>
              <p className="para">Medical Reccords</p>
            </div>
        <div className="rightBottom">

        <div className="treatmentInfo">
          <p>Root Canal Treatment</p>
          <button className="previousTreatment">Show Previous Treatment</button>
          </div>
          <div className="treatmentInformation">
            <div>
              <p>26 Nov'19</p>
              <p style={{lineHeight:"2px"}}>09.00-10.00</p>
            </div>
            <div>
              <p>Treatment</p>
              <p style={{lineHeight:"2px"}}>Open Access</p>
            </div>
            <div>
              <p>Dentist</p>
              <p style={{lineHeight:"2px"}}>Dr.Adam H</p>
            </div>
            <div>
              <p>Nurse</p>
              <p style={{lineHeight:"2px"}}>Jessicamila</p>
            </div>
            <div>
            <FontAwesomeIcon icon={faBookMedical} className="faBookMedical"/>
            </div>
          </div>
          <div className="treatmentInformation">
            <div>
              <p>26 Nov'19</p>
              <p style={{lineHeight:"2px"}}>09.00-10.00</p>
            </div>
            <div>
              <p>Treatment</p>
              <p style={{lineHeight:"2px"}}>Open Access</p>
            </div>
            <div>
              <p>Dentist</p>
              <p style={{lineHeight:"2px"}}>Dr.Adam H</p>
            </div>
            <div>
              <p>Nurse</p>
              <p style={{lineHeight:"2px"}}>Jessicamila</p>
            </div>
            <div>
            <FontAwesomeIcon icon={faBookMedical} className="faBookMedical"/>
            </div>
          </div>
        </div>
      
      </section>
    </div>
  );
}

export default App;
