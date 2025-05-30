import { useForm } from 'react-hook-form';
import styles from './Form.module.css';

function Form({ onSubmit, validations }) {
    const {
        register, handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Form</h1>
            <div className={styles["form--group"]}>
                <label htmlFor="firstName">First Name</label>
                <input 
                    type="text" id="firstName" 
                    {...register("firstName",validations)}
                />
                {errors.firstName && <p className={styles["error--message"]}>{errors.firstName.message}</p>}
            </div>
            <div className={styles["form--group"]}> 
                <label htmlFor="middleName">Middle Name</label>
                <input 
                    type="text" id="middleName" 
                    {...register("middleName",validations)}
                />
                {errors.middleName && <p className={styles["error--message"]}>{errors.middleName.message}</p>}
            </div>
            <div className={styles["form--group"]}>
                <label htmlFor="lastName">Last Name</label>
                <input 
                    type="text" id="lastName"
                    {...register("lastName",validations)}
                    />
                {errors.lastName && <p className={styles["error--message"]}>{errors.lastName.message}</p>}
            </div>
            < input
                type="submit" disabled={isSubmitting} 
                value={isSubmitting ? "Submitting" : "Submit"}
            />
        </form>        
    </>;
}

export default Form;