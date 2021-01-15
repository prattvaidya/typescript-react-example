import React, {useState, useRef} from 'react'

interface Person {
    firstName: string;
    lastName: string
}

interface Props {
    text: string;
    ok?: boolean;
    i?: number;
    fn?: (bob: string) => string
    person: Person;
    handleChange: ((event: React.ChangeEvent<HTMLInputElement>) => void)
}

const TextField: React.FC<Props> = ({handleChange}) => {
    // Other types like object, string, undefined, interface, etc. can be used as the type for useState as well
    const [count, setCount] = useState<number | null>(5)
    const inputRef = useRef<HTMLInputElement>(null)
    const divRef = useRef<HTMLDivElement>(null)

    setCount(null)

    return (
        <div ref={divRef}>
            <input ref={inputRef} onChange={handleChange} />
        </div>
    )
}

export default TextField
