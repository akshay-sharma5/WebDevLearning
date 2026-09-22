export function Input({type,placeholder,onChange}){
    return(
        <input type={type}placeholder={placeholder}  onChange={onChange} className='px-10 py-5 mx-20 bg-blue-900 rounded-xl' />
    )
}