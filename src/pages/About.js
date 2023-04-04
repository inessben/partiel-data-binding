import React from 'react';
import Logo from '../component/Logo';
// import usersData from 'users.json';
import Navigation from '../component/Navigation';

const About = () => {
    // const [users, setUsers] = useState([]);

    // useEffect(() => {
    //     setUsers(usersData);
    // }, []);

    return (
        <div>
            <Navigation>
                <br />
                {/* <div>
                    {users.map((user) => (
                        <div key={user.id}>

                        </div>
                    ))}
                </div> */}
            </Navigation>
            <Logo />
        </div>
    );
};

export default About;