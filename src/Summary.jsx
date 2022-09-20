import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import I from './images/Iflag.png'
import h from './images/hflag.png'
import s from './images/sflag.png'
import a from './images/aflag.png'

const Summary = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Typography varienat='body' align='center'  fontSize={'20px'} color='white' fontWeight= {'bold'}>
           MATCH SUMMARY
        </Typography>
        <br />
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0, fontWeight: 'bold' }}>
            7th AUG 2022 
          </Typography>
          <img src={ s } width='40px' height='25px' float='left'></img>
          <Typography align='center' sx={{ color: 'text.secondary'}}> &nbsp;VS&nbsp; </Typography>
          <img src={ I } width='40px' height='25px' float='left'></img>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <img src={ s } width='40px' height='25px' float='left'></img> &nbsp;SL   170(8)  &nbsp;&nbsp;&nbsp;<img src={ I } width='40px' height='25px' float='left'></img> &nbsp;IND   171(8) 
          </Typography>
          <Typography sx={{fontWeight: 'bold'}}>
            India won the Match by 2 wickets
          </Typography>
          <Typography>
            Man of the Match : Virat Kohli
          </Typography>
          <Typography>
            Bowler of the Match : Hardik Pandya
          </Typography>
          <Typography>
            Best Fielder : Dinesh Karthik
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
      <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0, fontWeight: 'bold' }}>
            8th AUG 2022 
          </Typography>
          <img src={ h } width='40px' height='25px' float='left'></img>
          <Typography align='center' sx={{ color: 'text.secondary'}}> &nbsp;VS&nbsp; </Typography>
          <img src={ a } width='40px' height='25px' float='left'></img>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <img src={ h } width='40px' height='25px' float='left'></img> &nbsp;HK   170(8)  &nbsp;&nbsp;&nbsp;<img src={ a } width='40px' height='25px' float='left'></img> &nbsp;IND   171(8) 
          </Typography>
          <Typography sx={{fontWeight: 'bold'}}>
            Hong Kong won the Match by 2 wickets
          </Typography>
          <Typography>
            Man of the Match : Virat Kohli
          </Typography>
          <Typography>
            Bowler of the Match : Hardik Pandya
          </Typography>
          <Typography>
            Best Fielder : Dinesh Karthik
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
      <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0, fontWeight: 'bold' }}>
            9th AUG 2022 
          </Typography>
          <img src={ s } width='40px' height='25px' float='left'></img>
          <Typography align='center' sx={{ color: 'text.secondary'}}> &nbsp;VS&nbsp; </Typography>
          <img src={ a } width='40px' height='25px' float='left'></img>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <img src={ s } width='40px' height='25px' float='left'></img> &nbsp;SL   170(8)  &nbsp;&nbsp;&nbsp;<img src={ I } width='40px' height='25px' float='left'></img> &nbsp; AFG   171(8) 
          </Typography>
          <Typography sx={{fontWeight: 'bold'}}>
            India won the Match by 2 wickets
          </Typography>
          <Typography>
            Man of the Match : Virat Kohli
          </Typography>
          <Typography>
            Bowler of the Match : Hardik Pandya
          </Typography>
          <Typography>
            Best Fielder : Dinesh Karthik
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
      <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0, fontWeight: 'bold' }}>
            10th AUG 2022 
          </Typography>
          <img src={ I } width='40px' height='25px' float='left'></img>
          <Typography align='center' sx={{ color: 'text.secondary'}}> &nbsp;VS&nbsp; </Typography>
          <img src={ s } width='40px' height='25px' float='left'></img>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <img src={ I } width='40px' height='25px' float='left'></img> &nbsp;IND   170(8)  &nbsp;&nbsp;&nbsp;<img src={ h } width='40px' height='25px' float='left'></img> &nbsp;HK   171(8) 
          </Typography>
          <Typography sx={{fontWeight: 'bold'}}>
            India won the Match by 2 wickets
          </Typography>
          <Typography>
            Man of the Match : Virat Kohli
          </Typography>
          <Typography>
            Bowler of the Match : Hardik Pandya
          </Typography>
          <Typography>
            Best Fielder : Dinesh Karthik
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0, fontWeight: 'bold' }}>
            11th AUG 2022 
          </Typography>
          <img src={ s } width='40px' height='25px' float='left'></img>
          <Typography align='center' sx={{ color: 'text.secondary'}}> &nbsp;VS&nbsp; </Typography>
          <img src={ I } width='40px' height='25px' float='left'></img>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <img src={ s } width='40px' height='25px' float='left'></img> &nbsp;SL   170(8)  &nbsp;&nbsp;&nbsp;<img src={ I } width='40px' height='25px' float='left'></img> &nbsp;IND   171(8) 
          </Typography>
          <Typography sx={{fontWeight: 'bold'}}>
            India won the Match by 2 wickets
          </Typography>
          <Typography>
            Man of the Match : Virat Kohli
          </Typography>
          <Typography>
            Bowler of the Match : Hardik Pandya
          </Typography>
          <Typography>
            Best Fielder : Dinesh Karthik
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
      <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0, fontWeight: 'bold' }}>
            12th AUG 2022 
          </Typography>
          <img src={ h } width='40px' height='25px' float='left'></img>
          <Typography align='center' sx={{ color: 'text.secondary'}}> &nbsp;VS&nbsp; </Typography>
          <img src={ a } width='40px' height='25px' float='left'></img>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <img src={ h } width='40px' height='25px' float='left'></img> &nbsp;HK   170(8)  &nbsp;&nbsp;&nbsp;<img src={ a } width='40px' height='25px' float='left'></img> &nbsp;IND   171(8) 
          </Typography>
          <Typography sx={{fontWeight: 'bold'}}>
            Hong Kong won the Match by 2 wickets
          </Typography>
          <Typography>
            Man of the Match : Virat Kohli
          </Typography>
          <Typography>
            Bowler of the Match : Hardik Pandya
          </Typography>
          <Typography>
            Best Fielder : Dinesh Karthik
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
      <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0, fontWeight: 'bold' }}>
            13th AUG 2022 
          </Typography>
          <img src={ s } width='40px' height='25px' float='left'></img>
          <Typography align='center' sx={{ color: 'text.secondary'}}> &nbsp;VS&nbsp; </Typography>
          <img src={ a } width='40px' height='25px' float='left'></img>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <img src={ s } width='40px' height='25px' float='left'></img> &nbsp;SL   170(8)  &nbsp;&nbsp;&nbsp;<img src={ I } width='40px' height='25px' float='left'></img> &nbsp; AFG   171(8) 
          </Typography>
          <Typography sx={{fontWeight: 'bold'}}>
            India won the Match by 2 wickets
          </Typography>
          <Typography>
            Man of the Match : Virat Kohli
          </Typography>
          <Typography>
            Bowler of the Match : Hardik Pandya
          </Typography>
          <Typography>
            Best Fielder : Dinesh Karthik
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
      <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0, fontWeight: 'bold' }}>
            14th AUG 2022 
          </Typography>
          <img src={ I } width='40px' height='25px' float='left'></img>
          <Typography align='center' sx={{ color: 'text.secondary'}}> &nbsp;VS&nbsp; </Typography>
          <img src={ s } width='40px' height='25px' float='left'></img>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <img src={ I } width='40px' height='25px' float='left'></img> &nbsp;IND   170(8)  &nbsp;&nbsp;&nbsp;<img src={ h } width='40px' height='25px' float='left'></img> &nbsp;HK   171(8) 
          </Typography>
          <Typography sx={{fontWeight: 'bold'}}>
            India won the Match by 2 wickets
          </Typography>
          <Typography>
            Man of the Match : Virat Kohli
          </Typography>
          <Typography>
            Bowler of the Match : Hardik Pandya
          </Typography>
          <Typography>
            Best Fielder : Dinesh Karthik
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Summary;