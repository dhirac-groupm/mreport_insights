import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import {useState, useEffect} from 'react';

import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography,Container, Grid,Item, FormControl,
InputLabel,Select,MenuItem, TextField, Button,FormHelperText, 
Dialog, DialogTitle, DialogActions,DialogContent,DialogContentText, CircularProgress} from '@material-ui/core';
import { DatePicker } from "@material-ui/pickers";
import axios from 'axios';
import CheckIcon from '@material-ui/icons/Check';
import ErrorIcon from '@material-ui/icons/Error';
import api from './components/network';

function App() {
  
  const[agency,setAgency] = useState();
  const[loading,setLoading] = useState(false);
  const[loadingAdvertiser,setLoadingAdvertiser] = useState(false);
  const[loadingCampaign,setLoadingCampaign] = useState(false);
  const[email,setEmail] = useState();
  const[advertiser,setAdvertiser] = useState([]);
  const[advertiserList,setAdvertiserList] = useState([]);
  const[channel,setChannel] = useState([]);
  const[channelList,setChannelList] = useState([]);
  const[campaign,setCampaign] = useState([]);
  const[campaignList,setCampaignList] = useState([]);
  const[section,setSection] = useState([]);
  const[sectionFilter,setSectionFilter] = useState([]);
  const[reportType,setReportType] = useState();
  const[insight,setInsight] = useState();
  const[date,setDate] = useState();
  const[submitLoading,setSubmitLoading] = useState(false);
  const[showConfirmation,setShowConfirmation] = useState(true);
  const[sucMessage,setSucMessage]=useState(false);
  const[errMessage,setErrMessage]=useState(false);
  const [open, setOpen] = React.useState(false);

  //validation
  const[agencyVal,setAgencyVal] = useState(false);
  const[emailVal,setEmailVal] = useState(false);
  const[reportVal,setReportVal] = useState(false);
  const[dateVal,setDateVal] = useState(false);
  const[advertiserVal,setAdvertiserVal] = useState(false);
  const[channelVal,setChannelVal] = useState(false);
  const[campaignVal,setCampaignVal] = useState(false);
  const[sectionVal,setSectionVal] = useState(false);
  const[insightVal,setInsightVal] = useState(false);


  const agencyList = [
    {id:"51710",name:"Mediacom"},
    {id:"59553",name:"Wavemaker"},
    {id:"59554",name:"Mindshare"},
    {id:"68663",name:"GroupM"},
    {id:"64945",name:"StudioM"},
    {id:"145698",name:"oBoticario"},
    {id:"145816",name:"IKEA"}
  ]



  useEffect(()=>{

      api("https://europe-west1-mreport.cloudfunctions.net/datorama_workspaces","GET")
      .then(res => {
       
        console.log(res,"workspaces");

      }).catch((err)=>console.log(err))

  })


  const reportTypeList = [
    {id:"Monthly",name:"Monthly Report"},
    {id:"Weekly",name:"Weekly Report"},
    {id:"Final",name:"Final Report"},
   
  ]

const sectionList = [
{id: 'Main KPIs', name: 'Main KPIs', channel: 'Search'},
{id: 'Summary', name: 'Summary', channel: 'Search'},
{id: 'Detailed Performance', name: 'Detailed Performance', channel: 'Search'},
{id: 'Keyword Performance', name: 'Keyword Performance', channel: 'Search'},
{id: 'Impression Share & Impression Rate', name: 'Impression Share & Impression Rate', channel: 'Search'},
{id: 'Conversions Performance', name: 'Conversions Performance', channel: 'Search'},
{id: 'Device Performance', name: 'Device Performance', channel: 'Search'},
{id: 'Temporal Performance', name: 'Temporal Performance', channel: 'Search'},
{id: 'Adgroup Performance', name: 'Adgroup Performance', channel: 'Search'},
{id: 'Main KPIs', name: 'Main KPIs', channel: 'Google Display'},
{id: 'Temporal Performance', name: 'Temporal Performance', channel: 'Google Display'},
{id: 'Detailed Performance', name: 'Detailed Performance', channel: 'Google Display'},
{id: 'Conversions Performance', name: 'Conversions Performance', channel: 'Google Display'},
{id: 'Main KPIs', name: 'Main KPIs', channel: 'YouTube'},
{id: 'Temporal Performance', name: 'Temporal Performance', channel: 'YouTube'},
{id: 'Detailed Performance', name: 'Detailed Performance', channel: 'YouTube'},
{id: 'Device Performance', name: 'Device Performance', channel: 'YouTube'},
{id: 'Conversions Performance', name: 'Conversions Performance', channel: 'YouTube'},
{id: 'Main KPIs', name: 'Main KPIs', channel: 'Facebook'},
{id: 'Temporal Performance', name: 'Temporal Performance', channel: 'Facebook'},
{id: 'Detailed Performance', name: 'Detailed Performance', channel: 'Facebook'},
{id: 'Objective: Awareness', name: 'Objective: Awareness', channel: 'Facebook'},
{id: 'Objective: Reach', name: 'Objective: Reach', channel: 'Facebook'},
{id: 'Objective: Traffic', name: 'Objective: Traffic', channel: 'Facebook'},
{id: 'Objective: Engagement', name: 'Objective: Engagement', channel: 'Facebook'},
{id: 'Objective: App Installs', name: 'Objective: App Installs', channel: 'Facebook'},
{id: 'Objective: Video Views', name: 'Objective: Video Views', channel: 'Facebook'},
{id: 'Objective: Messages', name: 'Objective: Messages', channel: 'Facebook'},
{id: 'Objective: Lead Generation', name: 'Objective: Lead Generation', channel: 'Facebook'},
{id: 'Objective: Conversions', name: 'Objective: Conversions', channel: 'Facebook'},
{id: 'Objective: Catalogue Sales', name: 'Objective: Catalogue Sales', channel: 'Facebook'},
{id: 'Objective: Store Visits', name: 'Objective: Store Visits', channel: 'Facebook'},
{id: 'Conversions Performance', name: 'Conversions Performance', channel: 'Facebook'},
{id: 'Device Performance', name: 'Device Performance', channel: 'Facebook'},
{id: 'Main KPIs', name: 'Main KPIs', channel: 'Digital Reserve'},
{id: 'Temporal Performance', name: 'Temporal Performance', channel: 'Digital Reserve'},
{id: 'Delivery Performance', name: 'Delivery Performance', channel: 'Digital Reserve'},
{id: 'Detailed Performance', name: 'Detailed Performance', channel: 'Digital Reserve'},
{id: 'Creative Performance', name: 'Creative Performance', channel: 'Digital Reserve'},
{id: 'Viewability Performance', name: 'Viewability Performance', channel: 'Digital Reserve'},
{id: 'Conversions Performance', name: 'Conversions Performance', channel: 'Digital Reserve'},

{id: 'Main KPIs', name: 'Main KPIs', channel: 'Search & Shopping'},
{id: 'Detailed Performance', name: 'Detailed Performance', channel: 'Search & Shopping'},
{id: 'Main KPIs', name: 'Main KPIs', channel: 'Social'},
{id: 'Detailed Performance', name: 'Detailed Performance', channel: 'Social'},

{id: 'Main KPIs', name: 'Main KPIs', channel: 'Display'},
{id: 'Detailed Performance', name: 'Detailed Performance', channel: 'Display'},
{id: 'Main KPIs', name: 'Main KPIs', channel: 'Video'},
{id: 'Detailed Performance', name: 'Detailed Performance', channel: 'Video'}


]


useEffect(() => {
  setDate(getCurrentDate())
},[]);


const handleAgency = async (value) =>{

  setAgencyVal(false)
  setSectionFilter([]);
  setCampaignList([]);
  setAdvertiserList([]);
  setAgency(value);
  setChannel('');
  setLoading(true);

  api("https://europe-west3-mreport.cloudfunctions.net/datorama_channels","POST", { workspace_id: value })
  .then(res => {
    setChannelList(res.data.data);
    setLoading(false);
   }).catch((err)=>console.log(err))
   


  setLoadingAdvertiser(true);
  api("https://europe-west3-mreport.cloudfunctions.net/datorama_advertisers","POST", { workspace_id: value })
  .then(res => {
    setAdvertiserList(res.data.data);
    setLoadingAdvertiser(false);
   }).catch((err)=>console.log(err))
  
 


}


const handleChannel = async (value) =>{

  setAgencyVal(false);
  if(advertiser.length > 1){
    
    setLoadingCampaign(true);
    api("https://europe-west3-mreport.cloudfunctions.net/datorama_campaigns","POST", { workspace_id: agency, advertiser:advertiser,channel:value })
    .then(res => {
      setCampaignList(res.data.data);
      setLoadingCampaign(false);
     }).catch((err)=>console.log(err))
    


    } 

    setChannel(value);

    addSection(value);



  
}

const addSection = (value) => {


  const data = [];
  if(agency != "145698"){
    
    sectionList.find((o , i) => {
      if(o.channel === value)
      {
        data.push({"name":o.name,"id":o.id})
      }
    });
    setSectionFilter(data);
  }
  else{

    data.push({"name":"Overview Geral","id":"overview_geral"},
              {"name":"SEM","id":"sem"},
              {"name":"Display","id":"display"},
              {"name":"Paid Social","id":"paid_social"}       
              )
    setSectionFilter(data);

  }
}


const handleCampaign = async (value) =>{

  setAgencyVal(false);

  setCampaign(value);
 
   
 }

 const handleSection = async (value) =>{
 
  setSectionVal(false);
 
  setSection(value);
 
   
 }


 const handleInsight = async (value) =>{

  setInsightVal(false);
  setInsight(value);
 
   
 }

 const handleDate = async (value) =>{

  setDateVal(false);
  setDate(value);
 
   
 }


const handleAdvertiser = async (value) =>{

  setAdvertiserVal(false);

  if(channel){
    
      setLoadingCampaign(true);
      api("https://europe-west3-mreport.cloudfunctions.net/datorama_campaigns","POST", {  workspace_id: agency, advertiser:value,channel:channel })
      .then(res => {
        setCampaignList(res.data.data);
        setLoadingCampaign(false);
       }).catch((err)=>console.log(err))
  }

  
  setAdvertiser(value); 

}

const clear = async (value) =>{

 
   window.location.reload();
 
   
 }



const postData = async (value) =>{

  /*
  const res={
    "agency":agency,
    "email":email,
    "reportType":reportType,
    "date":date,
    "advertiser":advertiser,
    "channel":channel,
    "campaign":campaign.campaign_name,
    "section":section,
    "campaign_id":campaign.campaign_id,
    "advertiser_id":campaign.advertiser_id,
    "insight":insight
  }*/
 

   if(agency === undefined || agency == "") {setAgencyVal(true); return; } else {setAgencyVal(false)}
   if(email === undefined || email == "") {setEmailVal(true); return; } else {setEmailVal(false)}
   if(reportType === undefined || reportType == "") {setReportVal(true); return; } else {setReportVal(false)}
   if(date === undefined || date == "") {setDateVal(true); return; } else {setDateVal(false)}
   if(advertiser === undefined || advertiser == "") {setAdvertiserVal(true); return; } else {setAdvertiserVal(false)}
   if(channel === undefined || channel == "") {setChannelVal(true); return; } else {setChannelVal(false)}
   if(campaign === undefined || campaign == "") {setCampaignVal(true); return; } else {setCampaignVal(false)}
   if(section === undefined || section == "") {setSectionVal(true); return; } else {setSectionVal(false)}
   if(insight === undefined || insight == "") {setInsightVal(true); return; } else {setInsightVal(false)}
 

   handleClickOpen();
   
 }


 const getCurrentDate = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();
  
  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;
  
  const formattedDate = yyyy + '-' + mm + '-' + dd;
  //console.log(formattedDate,"date");

  return formattedDate;
 }
 

 const handleClickOpen = () => {
   setOpen(true);
 };

 const handleClose = () => {
   setOpen(false);
   window.location.reload();

 };

 const handleEdit = () => {
  setOpen(false);
 // window.location.reload();

};

 const  submitForm = async() => {

  /*
  const res={
    "agency":agency,
    "email":email,
    "reportType":reportType,
    "date":date,
    "advertiser":advertiser,
    "channel":channel,
    "campaign":campaign.campaign_name,
    "section":section,
    "campaign_id":campaign.campaign_id,
    "advertiser_id":campaign.advertiser_id,
    "insight":insight
  }*/

  setShowConfirmation(false);

 // setSucMessage(true);
   // setErrMessage(true);
 
  api("https://europe-west3-mreport.cloudfunctions.net/insight_to_bigquery","POST",  { data :{ insert_date:new Date().toISOString(), report_type:reportType,date:date,email:email,channel:channel,section:section,advertiser_id:campaign.advertiser_id,advertiser:advertiser,campaign_id:campaign.campaign_id,campaign:campaign.campaign_name,comment:insight,workspace_id:agency }})
  .then(res => {
    if(res.data.status == "success"){

      setSucMessage(true);
  
    }
    else{
      setErrMessage(true);
    }
   }).catch((err)=>console.log(err))
  



};

  return (
   
    <>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
       
         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            mReport Insights
          </Typography>
          
        
        </Toolbar>
      </AppBar>

     
    </Box>

     <Container maxWidth={false} disableGutters={false}>
    
      <Grid container spacing={2} >

          <Grid item xs={6}  >
                <FormControl variant="standard"  fullWidth style={{marginTop:50}}>
                          <InputLabel id="demo-simple-select-standard-label">Workspace *</InputLabel>
                          <Select fullWidth
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          value={agency}
                          onChange={(e) => handleAgency(e.target.value)}
                          label="Agency"
                          error={agencyVal}
                          required
                        >
                  
                          {agencyList.map((res,index) => {
                          return(
                          <MenuItem key={index} value={res.id}>{res.name}</MenuItem>
                          )})}
                          
                         
                    </Select>
                 
              </FormControl>

              <FormControl variant="standard"  fullWidth style={{marginTop:50}}>
                          <InputLabel id="demo-simple-select-standard-label">Report Type *</InputLabel>
                          <Select fullWidth
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          value={reportType}
                          onChange={(e) => setReportType(e.target.value)}
                          label="Report Type"
                          error={reportVal}
                          required
                        >
                         
                          {reportTypeList.map((res,index) => {
                          return(
                          <MenuItem key={index} value={res.id}>{res.name}</MenuItem>
                          )})}
                          
                         
                    </Select>
              </FormControl>
     
               
              <FormControl variant="standard"  fullWidth style={{marginTop:50}}>
                          <InputLabel id="demo-simple-select-standard-label">Advertiser * &nbsp;&nbsp;  {loadingAdvertiser == true ? "  Loading data .... please wait " : "" }</InputLabel>
                          <Select fullWidth
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          value={advertiser}
                          onChange={(e) => handleAdvertiser(e.target.value)}
                          label="Advertiser"
                          error={advertiserVal}
                          required
                          MenuProps={{
                          disableScrollLock: false,
                        }}
                        >
                        {advertiserList.length >= 1 ? advertiserList.map((res,index) => {
                          
                          return(  
                                   
                          <MenuItem key={index} value={res} >{res}</MenuItem>

                          )})
                          : <MenuItem >No Data Avaliable</MenuItem>}
                    </Select>
              </FormControl>       


               <FormControl variant="standard"  fullWidth style={{marginTop:50}} >
                          <InputLabel id="demo-simple-select-standard-label">Campaign *&nbsp;&nbsp;  {loadingCampaign == true ? "  Loading data .... please wait " : "" }</InputLabel>
                          <Select fullWidth
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          value={campaign}
                          onChange={(e) => handleCampaign(e.target.value)}
                          label="Campaign"
                          error={campaignVal}
                         
                          MenuProps={{
                          disableScrollLock: false,
                        }}
                        >
                         {campaignList.length >=1 ? campaignList.map((res,index) => {
                          
                          return(  
                                   
                          <MenuItem key={index} value={res} >{res.campaign_name}</MenuItem>

                          )})
                          :<MenuItem >No Data Avaliable</MenuItem>}
                    </Select>
              </FormControl>       

           
          </Grid>

          
          <Grid item xs={6}>

          <FormControl variant="standard"  fullWidth style={{marginTop:50}}>
          <TextField fullWidth
      
                id="demo-simple-select"
                value={email}
                onChange={(e) => {setEmail(e.target.value);setEmailVal(false);}}
                label="Email"
                required
                error={emailVal}
              
              
           />
          </FormControl>

          <FormControl variant="standard"  fullWidth style={{marginTop:50}}>

        
          <TextField fullWidth
  
              id="date"
              label="Select Date"
              type="date"
              value={date}
              error={dateVal}
              onChange={(e) => handleDate(e.target.value)}
              InputLabelProps={{
                shrink: true,
                required:true
                
              }}
              defaultValue={date}
             
             
      />
          </FormControl>


          <FormControl variant="standard"  fullWidth style={{marginTop:50}}>
                          <InputLabel id="demo-simple-select-standard-label">Pages *&nbsp;&nbsp;  {loading == true ? "  Loading data .... please wait " : "" }</InputLabel>
                          <Select fullWidth
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          value={channel}
                          onChange={(e) => handleChannel(e.target.value)}
                          label="Channel"
                          error={channelVal}
                          SelectDisplayProps={{
                             multiple:true
                          }}
                        >
                      
                        {channelList.length >= 1 ? channelList.map((res,index) => {
                          
                          return(  
                                   
                          <MenuItem key={index} value={res} >{res}</MenuItem>

                          )})
                          :<MenuItem >No Data Avaliable</MenuItem>}
                    </Select>
              </FormControl>

              <FormControl variant="standard"  fullWidth style={{marginTop:50}}>
                          <InputLabel id="demo-simple-select-standard-label">Section *</InputLabel>
                          <Select fullWidth
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          value={section}
                          error={sectionVal}
                          onChange={(e) => handleSection(e.target.value)}
                          label="Section"
                          MenuProps={{
                          disableScrollLock: false,
                        }}
                        >
                         {sectionFilter.length >= 1 ? sectionFilter.map((res,index) => {
                          return(
                          <MenuItem key={index} value={res.name}>{res.name}</MenuItem>
                          )}):<MenuItem >No Data Avaliable</MenuItem>}
                    </Select>
              </FormControl>


        
          </Grid>

          <Grid item xs={12}>


          <FormControl variant="standard"  fullWidth style={{marginTop:50}}>
          <TextField fullWidth multiline minRows={6}
               
                id="demo-simple-select"
                value={insight}
                onChange={(e) => handleInsight(e.target.value)}
                label="Insight text"
                required
                error={insightVal}
              
           />
          </FormControl>

          </Grid>

        <Grid container style={{marginTop:30}}>
        <Grid item>
        <Button color="secondary" variant="contained" style={{margin:5, backgroundColor:'#f4f4f4',color:'black'}} onClick={clear}>
            CLEAR
          </Button>
        </Grid>

        <Grid item style={{ display: "flex" }}>
          <Button color="secondary" variant="contained" style={{margin:5, backgroundColor:'#3F51B5'}} onClick={postData}>
            CONFIRM
          </Button>

      <div>
   { showConfirmation ? 
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" style={{fontWeight:900, backgroundColor:"#f4f4f4"}}>
          {"Final Confirmation"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" style={{width:600}}>


                            
            <div style={{margin:5,padding:10, color:'black',borderBottom:'1px solid #F1F0F0',display: 'flex'}}>

              <div style={{flexBasis:'30%'}}>Insert Date</div>
              <div style={{flexBasis:'70%'}}>{new Date().toISOString()}</div>
               
            </div>

            <div style={{margin:5,padding:10, color:'black',borderBottom:'1px solid #F1F0F0', display:'flex'}}>
              <div style={{flexBasis:'30%'}}> Report Type: </div>  
              <div style={{flexBasis:'70%'}}> {reportType} </div>
            </div>

            <div style={{margin:5,padding:10, color:'black',borderBottom:'1px solid #F1F0F0',display:'flex'}}>
            <div style={{flexBasis:'30%'}}> Date:  </div>
            <div  style={{flexBasis:'70%'}}>{date}</div> 
            </div>

            <div style={{margin:5,padding:10, color:'black',borderBottom:'1px solid #F1F0F0', display:'flex'}}>
             
              <div style={{flexBasis:'30%'}}>  Email: </div>
               <div style={{flexBasis:'70%'}}>{email}</div> 
            </div>

            <div style={{margin:5,padding:10, color:'black',borderBottom:'1px solid #F1F0F0' ,display:'flex'}}>
            <div style={{flexBasis:'30%'}}>  Workspace Id: </div>
               <div style={{flexBasis:'70%'}}>{agency}</div> 
            </div>

            <div style={{margin:5,padding:10, color:'black',borderBottom:'1px solid #F1F0F0', display:'flex'}}>
            <div style={{flexBasis:'30%'}}>  Channel: </div>
               <div style={{flexBasis:'70%'}}>{channel}</div> 
            </div>

            <div style={{margin:5,padding:10, color:'black',borderBottom:'1px solid #F1F0F0', display:'flex'}}>
            <div style={{flexBasis:'30%'}}>  Section: </div>
               <div style={{flexBasis:'70%'}}>{section}</div> 
            </div>

            <div style={{margin:5,padding:10, color:'black',borderBottom:'1px solid #F1F0F0', display:'flex'}}>
            <div style={{flexBasis:'30%'}}>  Advertiser: </div>
               <div style={{flexBasis:'70%'}}>{advertiser}</div> 
            </div>

            <div style={{margin:5,padding:10, color:'black',borderBottom:'1px solid #F1F0F0', display:'flex'}}>
             

              <div style={{flexBasis:'30%'}}>   Advertiser ID: </div>
               <div style={{flexBasis:'70%'}}>{campaign.advertiser_id}</div> 
            </div>

            <div style={{margin:5,padding:10, color:'black',borderBottom:'1px solid #F1F0F0', display:'flex'}}>
             

              <div style={{flexBasis:'30%'}}>  Campaign ID:  </div>
               <div style={{flexBasis:'70%'}}>{campaign.campaign_id}</div> 
            </div>

            <div style={{margin:5,padding:10, color:'black',borderBottom:'1px solid #F1F0F0',display:'flex'}}>
            

              <div style={{flexBasis:'30%'}}>    Campaign:  </div>
               <div style={{flexBasis:'70%'}}>{campaign.campaign_name}</div> 
            </div>

            <div style={{margin:5,padding:10, color:'black',borderBottom:'1px solid #F1F0F0',display:'flex'}}>
             
              <div style={{flexBasis:'30%'}}>     Insight Text:  </div>
               <div style={{flexBasis:'70%'}}>{insight}</div> 
            </div>

          </DialogContentText>
          </DialogContent>
          <DialogActions>
          <Button onClick={handleEdit} style={{margin:5,backgroundColor:'#f4f4f4', color:'black'}}>EDIT</Button>
          <Button onClick={submitForm} autoFocus style={{margin:5, backgroundColor:'#1D2761', color:'white'}}>SUBMIT</Button>
        </DialogActions>
      </Dialog>
      :
      <>
      <Dialog
        open={open}
      //  onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
      <DialogContent>
          <DialogContentText id="alert-dialog-description" style={{width:600}}>

        
          <div style={{display:'flex',marginTop:"10%", paddingLeft:"10%",  }}>

               {sucMessage ? 
                <>
                <div style={{flexBasis:'10%',color:'white', backgroundColor:'green', height:50,width:10 ,borderRadius:'50%',marginRight:10,marginLeft:50}}> <CheckIcon style={{ display:'flex', padding:12, fontWeight:900}} /> </div>
                <div style={{flexBasis:'70%', marginTop:10, color:'green'}}>Your data has been posted sucessfully.</div> 
                
               </>

                : errMessage ?    

                <>
                <div style={{flexBasis:'10%',color:'white', backgroundColor:'red', height:50,width:10 ,borderRadius:'50%',marginRight:10}}> <ErrorIcon style={{ display:'flex', padding:14, fontWeight:900}} /> </div>
                <div style={{flexBasis:'90%', marginTop:10, color:'red'}}>Sorry error occured. Contact your administrator</div> 
                
               </>

                :  
               <>
               <div style={{flexBasis:'10%',marginLeft:50}}> <CircularProgress /> </div>
               <div style={{flexBasis:'70%', marginTop:10, color:'black'}}>Submitting your data......Please Wait...</div> 
               </>
               }

          </div>


          </DialogContentText>
          </DialogContent>
          <DialogActions>
          <Button onClick={handleClose} style={{margin:5,backgroundColor:'#f4f4f4', color:'black'}}>CLOSE</Button>
         
          </DialogActions>
          </Dialog>
      </>
      
      }
      </div>
        </Grid>
      </Grid>
  

    </Grid>
    </Container>



      </>
  );
}

export default App;

