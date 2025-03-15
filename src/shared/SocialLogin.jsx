import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext/AuthContext';
import { FcGoogle } from 'react-icons/fc';
import { motion } from "framer-motion";

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error.message)
        })
    }
    return (
        <div>
            <div className="divider">OR</div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <button onClick={handleGoogleSignIn} className='btn  w-full btn-lg' > <FcGoogle className="text-2xl" /> Google</button>
            </motion.div>
        </div>
    );
};

export default SocialLogin;