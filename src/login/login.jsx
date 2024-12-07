import React from 'react'

const Login = () => {
  return (
    <div className='container-fluid border border-primary w-100 min-vh-100 d-flex justify-content-evenly align-items-center bg-primary'>
        <div className='text-white w-50 border d-flex flex-column justify-content-evenly p-3'>
           <h2>BOOTSTRAP BRAIN</h2>
           <hr></hr>
           <h2>Wen make digital products that drive you to stand out</h2>
           <h5>We write words,take photos,make videos,and interact with artificial intElligence</h5>
           <div className='d-flex flex-column justify-content-around align-items-start'>
            <pre>......

            </pre>
            
            
           </div>
        </div>
        <div className='w-25 '>
           <form>
            <div className='card border-primary py-5 px-3 shadow-lg'>
                <div className='card-head mt-3'>
                    <h3>Sign_in</h3>
                    <p className='fs-6'>Don't have an account?<a href='#'>Signup</a></p>
                </div>
                <div className='card-body'>
                    <div className=' w-100 mb-3'>
                        <input type='email' className='form-control' placeholder='Enter your Email . . . .'/>

                    </div>
                    <div className='w-100 mb-3'>
                        <input type='password' className='form-control' placeholder='Enter Password . . . .'/>
                    </div>
                    <div className='w-60 mb-2'>
                        <input type='checkbox' id='checkbox'/><label className='form-label opacity-50' htmlFor='checkbox'>Keep me logged in</label>
                    </div>
                    <div className='w-100 mb-3'>
                        <button className='btn btn-primary w-100'>Login in now</button>
                    </div>
                    <div className='d-flex justify-content-end mb-4'>
                        <a href='#'>Forgot password ?</a>
                    </div>
                    <p className='card-text'>Or continue with </p>
                    <div className='d-flex w-60 justify-content-evenly align-items-evenly'><p className='border rounded shadow p-1'><i className="bi bi-facebook fs-3"></i></p ><p className='border rounded shadow p-1'><i className="bi bi-google fs-3"></i></p><p className='border rounded shadow p-1'><i class="bi bi-apple fs-3"></i></p></div>
                </div>
            </div>
           </form>
        </div>
    </div>
  )
}

export default Login;