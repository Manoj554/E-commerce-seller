import React from 'react'
import styles from './landing.module.css';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const Landing = () => {

    const auth=useSelector(state=>state.auth);

  return (
    <>
        <div className={styles.maindiv}>
            <div className={styles.content}>
                <div className={styles.heading}>
                    {auth.authenticate ? 'Start by adding your products':'Want to Start Journey with Cartany'}
                
                </div>
                <div className={styles.btn}>
                    {auth.authenticate ? (
                        <Link href={'/products'}>
                            <button >Go to add products {'>>'}</button>
                        </Link>
                    ):(
                        <Link href={'/signin'}>
                        <button>Begin your journey with Cartany! {'>>'}</button>
                        </Link>

                    ) }
                    
                </div>
    
            </div>
        </div>
    </>
  )
}

export default Landing