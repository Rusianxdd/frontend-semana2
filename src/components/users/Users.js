import React from 'react';
import { Register } from './Register';
import { Table } from './table/Table';
import { Show } from './Show';
import { Navbar } from '../navbar/Navbar';

export const Users = () => {
    return (
        <div>
            <Navbar/>
            <Show/>
        </div>
    )
}
