import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
    <section className={`${styles.flexCenter} my-4 `}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]  `}>
            <img src={client.logo} alt="client"
            className="sm:w-[192px] w-[100px]
            object-contain border-[0.1px] border-transparent
            hover:border-secondary rounded-[10px] cursor-pointer transition duration-600 ease-in-out
             " />
          </div>
        ))}
      </div>

    </section>
  )

export default Clients