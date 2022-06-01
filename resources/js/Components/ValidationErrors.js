import React from 'react';

export default function ValidationErrors({ errors }) {
    return (
        Object.keys(errors).length > 0 && (
            <div className="my-4 px-4 py-2 border-red-600 border-2 rounded-md">
                <div className="font-medium text-red-600">Whoops! Something went wrong.</div>

                <ul className="mt-3 list-disc list-inside text-sm text-red-600">
                    {Object.keys(errors).map(function (key, index) {
                        return <li key={index}>{errors[key]}</li>;
                    })}
                </ul>
            </div>
        )
    );
}
