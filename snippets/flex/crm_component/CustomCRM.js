import React from 'react';
import { withTheme, withTaskContext } from '@twilio/flex-ui';
import styled from "react-emotion";

// OwlCRM URL for loading profile images
const CRM_baseurl = 'https://owlcrm.herokuapp.com/';

class CustomCRM extends React.Component {
  render() {
    /*
     * ✏️ Challenge 1/5: retrieve Task data from props
     */
    const { task } = {};

    let content;
    if (!task || !task.attributes) {
      content = <CRMContainer>
        <HeaderLine><Header>
          <span>Custom CRM</span>
        </Header></HeaderLine>
        <LargeCaption>
          No task selected
        </LargeCaption>
      </CRMContainer>
    } else if (!task.attributes.account_data) {
      content = <CRMContainer>
        <HeaderLine><Header>
          <span>Custom CRM</span>
        </Header></HeaderLine>
        <LargeCaption>
          No customer data found
        </LargeCaption>
      </CRMContainer>
    } else {
      content = <CRMContainer>
        <div>
          <ProfilePhoto alt="" src={CRM_baseurl + task.attributes.account_data.img_src}></ProfilePhoto>
        </div>
        <HeaderLine><Header>
          <Value>Customer Profile</Value>
        </Header></HeaderLine>
        <LargeCaption>
          {
            /*
            * ✏️ Challenge 2/5: retrieve customer's first and last name from Task attributes
            */
            'FirstName LastName'
          }
        </LargeCaption>
        <div>
          <Label>Address</Label>
        </div><div>
          <Value>{task.attributes.account_data.address}</Value>
          <Value>{task.attributes.account_data.city}, {task.attributes.account_data.state}, {task.attributes.account_data.zip}</Value>
        </div>
        <div>
          <Label>Date of Birth</Label>
        </div><div>
          <Value>{task.attributes.account_data.birthday}</Value>
        </div>
        <div>
          <Label>Service Level</Label>
        </div><div>
          <Value>{task.attributes.account_data.service_level}</Value>
        </div>
        <div>
          <Label>Account balance</Label>
        </div><div>
          <Value>{task.attributes.account_data.account_balance}</Value>
        </div>
      </CRMContainer>;
    }
    return <Canvas>
      {content}
    </Canvas>;
  }
}

const Label = styled("h1")`
  color: ${'black' /* ✏️ Challenge 3/5: replace 'black' with some theme color, e.g. color.base7 */};
  letter-spacing: 2px;
  padding-top: 15px;
`;

const Value = styled("div")`
  color: ${'black' /* ✏️ Challenge 4/5: replace 'black' with some theme color, e.g. color.base8 */};
`;

const HeaderLine = styled("div")`
  border-style: solid;
  border-width: 0px 0px 4px;
  border-color: rgb(25, 118, 210);
`;

const Header = styled("div")`
  font-size: 10px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0px 12px 4px;
`;

const LargeCaption = styled("div")`
  font-size: 24px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
  margin: 34px 20px 10px;
`;

const ProfilePhoto = styled("img")`
  border-radius: 50%;
  height: 200px;
  width: 200px;
  margin-bottom:34px;
  margin-left:12px;
  margin-right:12px;
  margin-top:0px;
`;

const Canvas = styled("div")`
  height: 100%;
  min-height: 100%;
  margin: 0px;
  text-align: center;
  display: flex;
  flex-direction: row;
  flex-grow:1;
  flex-shrink:1;
  align-items: center;
  justify-content: center;
  height: auto;
  border-left-color: ${props => props.theme.AgentDesktopView.ContentSplitter.borderColor};
  border-left-width: 1px;
  border-left-style: solid;
  background-color: ${props => props.theme.TaskCanvas.Container.background};
`;

const CRMContainer = styled("div")`
  color: ${'black' /* ✏️ Challenge 5/5: replace 'black' with some theme color, e.g. calculated.textColor */};
  align-items: center;
  display: flex;
  flex-basis: auto;
  flex-direction: column;
  flex-grow:1;
  flex-shrink:1;
  justify-content: center;
  vertical-align:baseline;
  -webkit-box-align:center;
  -webkit-box-pack:center;
  max-width: 100%;
`;

export default withTaskContext(withTheme(CustomCRM));
