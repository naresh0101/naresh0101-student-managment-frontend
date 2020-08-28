import React,{Component} from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Chip } from '@material-ui/core';
import orgAPI from "../../api/org"

class Mystudents extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      students : []
     }
  }

  async componentDidMount(){
    orgAPI.fetchStudent(localStorage.getItem("token")).then((resp)=>{
          this.setState({students: resp})
    }).catch((err)=>{
      alert("somthing went wrong");
    })
  }
  render() { 
    return ( 
      <main className="p-3" style={{marginTop:"100px"}}>
          <div className="row p-3">
              {
                this.state.students?.map((student,index)=>{
                  return(
                    <div className="col-md-5 custom-shadow m-2" key={index}>
                      <CardHeader
                        avatar={
                          <Avatar aria-label="recipe" >
                           {student._id.name[0]}
                          </Avatar>
                        }
                        action={
                          <IconButton aria-label="settings">
                            <FavoriteIcon />
                          </IconButton>
                        }
                        title={student._id.name}
                        subheader={student._id.phone}
                      />
                      <CardContent style={{width:"100%"}}>
                        <Typography variant="body2" color="textSecondary" component="p">
                        {student._id.describe}
                        </Typography>
                      </CardContent>
                      <CardActions disableSpacing>
                        <Chip label={student._id.status} />
                      </CardActions>
                    </div>
                  )
                })
              }
          </div>
    </main>
     );
  }
}
 
export default Mystudents;