import { Component } from "react";
import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";



class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null,
    };
  }

  async componentDidMount() {
    try {
      const response = await Promise.all([
        fetch("https://api.github.com/users/priyanxhh29"),
      ]); 
      const resData = await Promise.all(response.map((r) => r.json()));
      this.setState({
        userInfo: resData[0],
      });
    } catch (error) {
      console.error(error); 
    }   
  }
  componentDidUpdate() {}
  componentWillUnmount() {  }
  render() {
    const { userInfo } = this.state; 
    return (
      <>
        {userInfo ? (
          <div className="profile-class-container">
            <div className="profile-container">
              <h1 className="profile-title">About Me</h1>
              <div className="profile-user-card">
              <a href={userInfo.html_url} target="_blank" rel="noopener noreferrer">
              <img  className="profile-user-img" src={userInfo.avatar_url}
                alt={userInfo.name}
                title={userInfo.name}
               />
              </a>
              <p className="profile-user-bio">{userInfo.bio}</p>
              <div className="social-media-container">
              <a href={"https://www.linkedin.com/in/priyanxhh29/"}
               title="Follow me on Linkedin"
              className="icon-button linkedin"
              target="_blank"
              rel='noopener noreferrer'>
              <i> <SiLinkedin title="Follow me on Linkedin" /></i>
              </a>
              <a href={"https://github.com/priyanxhh29"} title="Follow me on Github" className="icon-button github" target="_blank" rel='noopener noreferrer'>
                <i>  <SiGithub title="Follow me on Github" /> </i>
              </a>
              <a href={"mailto:priyanxh2003@gmail.com"} title="Any Query! Mail me" className="icon-button email" target="_blank" rel='noopener noreferrer'>
              <i> <SiGmail title="Any Query! Mail me" /> </i>
              </a>
            </div>
            </div>             
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

export default Profile;