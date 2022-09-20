import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Img from './images/sl.jpg'
import indImg from './images/India.png'
import hkImg from './images/hk.png'
import afImg from './images/af.webp'
import Img1 from './images/hpi5.webp'
import Img2 from './images/hpi3.webp'
import Img3 from './images/hpi6.webp'
import Img4 from './images/hpi7.webp'
import team from './images/teams.webp'
import Mwin from './Mwin';



const Country = () => {

    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
      })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      }));
   
      const [expanded, setExpanded] = React.useState(false);

      const handleExpandClick = () => {
        setExpanded(!expanded);
      };
    
      return (
        <div style={{ paddingTop: '70px', paddingBottom: '70px', paddingLeft:'20px'}}>

        <img src={ team } style={{width: '1460px', height: '550px', borderRadius:'20px'}}/> 

        <div class="col  mb-2" style={{display: 'flex', flexDirection: 'row', paddingTop: '70px'}}>

    {/* card 1 */}
    <div style={{ paddingRight: '20px'}} >
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar  aria-label="recipe">
                <img src={ Img } style={{borderRadius: '50%', height: '40px'}} />
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="SRI LANKA TEAM"
            subheader=" "
          />
          <CardMedia
            component="img"
            height="194"
            image= { Img1 }
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
            The Sri Lanka National Men's Cricket Team, nicknamed The Lions,represents Sri Lanka in men's international cricket. 
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>About</Typography>
              <Typography paragraph>
              After many years of underdog status, Sri Lanka finally entered the limelight of the cricketing world after winning the 1996 Cricket World Cup under the captaincy of Arjuna Ranatunga. Meanwhile, they revolutionized modern day batting strategies by rapid scoring during the first 15 overs. Sri Lanka later became the co-champions in 2002 ICC Champions Trophy and also became six times Asian champions in 1986, 1997, 2004, 2008, 2014 and 2022.
              </Typography>
              <Typography paragraph>
              On 11 September 1999, under the leadership of Sanath Jayasuriya, Sri Lanka won their first Test match against Australia, when they beat them by six wickets at Asgiriya Stadium, Kandy.Eventually they won the three-match Test series, 1–0.

              </Typography>
              <Typography paragraph>
              On 14 June 2000, Sri Lanka played their 100th Test match. It was against Pakistan, at SSC, Colombo, under the leadership of Sanath Jayasuriya. Pakistan won by 5 wickets.
              </Typography>
              
            </CardContent>
          </Collapse>
        </Card>
        </div>
      

         {/* card 2 */}
         <div style={{ paddingRight: '20px'}}>
        <Card sx={{ maxWidth: 345, border: '20px' }}>
          <CardHeader
            avatar={
              <Avatar  aria-label="recipe">
                <img src={ indImg } style={{borderRadius: '50%', height: '40px'}} />
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="INDIA TEAM"
            subheader=" "
          />
          <CardMedia
            component="img"
            height="194"
            image= { Img2 }
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
            The India men's national cricket team, also known as Team India or the Men in Blue, represents India in men's international cricket.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>About</Typography>
              <Typography paragraph>
              In limited-overs cricket, India made its ODI and T20I debuts in 1974 and 2006, respectively. The team has won five major ICC tournaments, winning the Cricket World Cup twice (1983 and 2011), the ICC T20 World Cup once (2007) and the ICC Champions Trophy twice (2002 and 2013) and have also finished as runners-up in the World Cup once (2003), the T20 World Cup once (2014), and the Champions Trophy twice (2000 and 2017). The team were also runners-up in the inaugural 2019–2021 ICC World Test Championship. It was the second team after the West Indies to win the World Cup and the first team to win the World Cup on home soil after winning the 2011 Cricket World Cup.
              </Typography>
              <Typography paragraph>
              They have also won the Asia Cup seven times, in 1984, 1988, 1990–91, 1995, 2010, 2016 and 2018, whilst finishing runners-up thrice (1997, 2004, 2008). The team also won the 1985 World Championship of Cricket, defeating Pakistan in the final. Other achievements include winning the ICC Test Championship Mace five times and the ICC ODI Championship Shield once.

              </Typography>
          
            </CardContent>
          </Collapse>
        </Card>
        </div>

         {/* card 3 */}
         <div style={{ paddingRight: '20px'}}>
         <Card sx={{ maxWidth: 345, border: '20px' }}>
          <CardHeader
            avatar={
              <Avatar  aria-label="recipe">
                <img src={ hkImg } style={{borderRadius: '50%', height: '40px'}} />
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="HONG KONG TEAM"
            subheader=" "
          />
          <CardMedia
            component="img"
            height="194"
            image= { Img3 }
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
            The Hong Kong national cricket team is the team that represents independent Hong Kong in international competition.  
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>About</Typography>
              <Typography paragraph>
              Hong Kong played its first One Day Internationals in the 2004 Asia Cup, and in January 2014 was granted ODI status until 2018, as a result of finishing third in the 2014 Cricket World Cup Qualifier. The team gained Twenty20 International status in November 2013, as a result of qualifying for the 2014 ICC World Twenty20. Hong Kong lost their ODI status in March 2018 after losing to the Netherlands in a play-off match during the 2018 Cricket World Cup Qualifier. They did, however, play two further ODI matches at the 2018 Asia Cup in September 2018 after winning the 2018 Asia Cup Qualifier, as the ICC announced that all matches played at the finals would have ODI status.
              </Typography>
              <Typography paragraph>
              Hong Kong has played in every ICC Trophy/World Cup Qualifier tournament, with the exceptions of the 1979 and 2005 events. It has also taken part in two ICC Intercontinental Cup tournaments, in 2005 and in 2015–17, and in two ICC T20 World Cup tournaments, in 2014 and 2016.Hong Kong has played in every ICC Trophy/World Cup Qualifier tournament, with the exceptions of the 1979 and 2005 events. It has also taken part in two ICC Intercontinental Cup tournaments, in 2005 and in 2015–17, and in two ICC T20 World Cup tournaments, in 2014 and 2016.

              </Typography>
           
              
            </CardContent>
          </Collapse>
        </Card>
        </div>

         {/* card 4 */}
         <div style={{ paddingRight: '20px'}}>
         <Card sx={{ maxWidth: 345, border: '20px' }}>
          <CardHeader
            avatar={
              <Avatar  aria-label="recipe">
                <img src={ afImg } style={{borderRadius: '50%', height: '40px'}} />
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="AFGHANISTAN TEAM"
            subheader=" "
          />
          <CardMedia
            component="img"
            height="194"
            image= { Img4 }
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
            The Afghanistan men's national team represents Afghanistan in international cricket. 
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>About</Typography>
              <Typography paragraph>
              The team is ranked 9th in Twenty20 International (T20I) cricket as of January 2021, and holds the world record for the highest ever T20I score, with their score of 278/3 against Ireland at Dehradun on 23 February 2019.
              </Typography>
              <Typography paragraph>
              In the 2011 Cricket World Cup qualifying tournament, Afghanistan failed to progress to the World Cup, but earned ODI status for four years. Their first ODI was against Scotland in the 5th place playoff, having previously beaten the Scots earlier in the tournament; Afghanistan won by 89 runs.

              </Typography>
              <Typography paragraph>
              In March 2019 against Ireland, Afghanistan achieved their first Test match victory in their only second Test match, becoming the fourth team after Australia, England and Pakistan to win one of their first two Tests.
              </Typography>
              
            </CardContent>
          </Collapse>
        </Card>
        </div>

        </div>
        <Mwin />
        </div>
      )
}
    
     
    export default Country;