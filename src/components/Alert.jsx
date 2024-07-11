import React from 'react'

const Alert = () => {
    return (
        <div className='absolute top-10 left-0 right-0 flex justify-center items-center'>
            <div className={`${type == 'danger' ? 'bg-red-500' : 'bg-green-800'} p-2 lg:rounded-full flex lg:inline-flex`} role='alert'>
                <p>{type === 'danger' ? 'Failed' : 'Success'}</p>
                <p className='mr-2 text-left'></p>
            </div>
        </div>
    )
}

export default Alert