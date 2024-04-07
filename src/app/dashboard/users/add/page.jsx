import styles from '@/app/ui/dashboard/products/addProduct/addProduct.module.css';

const AddProductsPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="username" name="username" required />
        <input type="email" placeholder="email" name="email" required />
        <input
          type="password"
          placeholder="password"
          name="password"
          required
        />
        <input type="phone" placeholder="phone" name="phone" />
        <select name="isAdmin" id="isAdmin">
          <option value={false}>is Admin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true}>is Active?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea
          name="desc"
          id="desc"
          rows="16"
          placeholder="Address"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default AddProductsPage;
