"use client";
import React from 'react';
import { useSearchParams } from 'next/navigation';

const GetID = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');

    return (
        <div>
            {id ? `ID: ${id}` : 'No ID provided'}
        </div>
    );
}

export default GetID;