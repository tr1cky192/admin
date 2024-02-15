// import React, { useState } from 'react';
// import axios from 'axios';


// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [verificationCode, setVerificationCode] = useState('');
//   const [isCodeSent, setIsCodeSent] = useState(false);
//   const [userRole, setUserRole] = useState<string | null>(null);

//   const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setEmail(e.target.value);
//   };
  
//   const handleVerificationCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setVerificationCode(e.target.value);
//   };
//   // const sendEmail = async () => {
//   //   try {
//   //     const response = await axios.get(
//   //       'https://server-your-price-booking.onrender.com/api/acsess-to-admin/check-admin/',
//   //       {
//   //         params: {
//   //           email: `${email}`, // Pass the email as a query parameter
//   //         },
//   //       }
//   //     );
  
//   //     const { status, data } = response.data;
//   //     if (status === 'success') {
//   //       setIsCodeSent(true);
//   //     } else {
//   //       console.error('Email verification failed');
//   //     }
//   //   } catch (error) {
//   //     console.error('Error while verifying the email', error);
//   //   }
//   // };
//   const sendVerificationCode = async () => {
//     try {
//       const response = await axios.get(
//         'https://server-your-price-booking.onrender.com/api/acsess-to-admin/check-admin/',
//         {
//           params: {
//             email: `${email}`,
//           },
//         }
//       );

  
//       const { status, data } = response.data;
//       if (status === 'success') {
//         if (data && data.role) {
//           setIsCodeSent(true);
//           setUserRole(data.role as string | null);
//         } else {
//           console.error('Role information is missing in the response data');
//         }
//       } else {
//         console.error('Verification failed');
//       }
//     } catch (error) {
//       console.error('Error while verifying the secret code', error);
//     }
//   };

//   const verifyCode = async () => {
//     try {
//       if (userRole === 'superadmin') {
//         console.log('Super Admin Access');
//       } else if (userRole === 'admin') {
//         console.log('Admin Access');
//       } else {
//         console.error('Invalid user role');
//       }
//     } catch (error) {
//       console.error('Code verification failed', error);
//     }
//   };

//   return (
//     <div>
//       {isCodeSent ? (
//         <div>
//           <label>Email:
//             <input type="email" value={email} onChange={handleEmailChange} />
//           </label>
//           <label>Verification Code:
//             <input type="text" value={verificationCode} onChange={handleVerificationCodeChange} />
//           </label>
//           <button type="button" onClick={verifyCode}>Verify Code</button>
//         </div>
//       ) : (
//         <div>
//           <label>Email:
//             <input type="email" value={email} onChange={handleEmailChange} />
//           </label>
//           <button type="button" onClick={sendVerificationCode}>Send Verification Code</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export { LoginPage };
import React, { useState } from 'react';
import axios from 'axios';  // Make sure to import Axios


const LoginPage = () => {
  const [email, setEmail] = useState<string>('');
  const [secretCode, setSecretCode] = useState<string>('');
  const [loggedInUser, setLoggedInUser] = useState<{ role: string; token: string }>({
    role: '',
    token: '',
  });
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const checkAdminEmail = async () => {
    try {
      const response = await axios.post(
        'https://server-your-price-booking.onrender.com/api/acsess-to-admin/check-admin/'
      );
      setEmail(response.data.email as string);
    } catch (error) {
      console.error('Error checking admin email:', error);
    }
  };

  const loginAdmin = async () => {
    try {
      const response = await axios.post(
        'https://server-your-price-booking.onrender.com/api/acsess-to-admin/log-in-admin/',
        {
          email,
          secretCode,
        }
      );
      setLoggedInUser(response.data.user as { role: string; token: string });
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div>
    <div>
      <p>Admin Email: {email}</p>
      <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={handleEmailChange}
        />
        <button type="button" onClick={checkAdminEmail}>Send code</button>
      <input
        type="text" 
        placeholder="Enter Secret Code"
        value={secretCode}
        onChange={(e) => setSecretCode(e.target.value)}
      />
      <button type="submit" onClick={loginAdmin}>Login</button>
    </div>
  {loggedInUser && (
    <div>
      <p>Welcome, {loggedInUser.role}</p>
      <p>Token: {loggedInUser.token}</p>
    </div>
  )}
</div>
  );
};

export  {LoginPage};

