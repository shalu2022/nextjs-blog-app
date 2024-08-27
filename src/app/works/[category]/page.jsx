import React from 'react'
import style from './page.module.css'
import { Content } from 'next/font/google'

export default function Caterogry({params}){
    return(
        <div className={style.container}>
            <h1 className={style.title}>{params.category}</h1>
            <section className={style.body}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi deserunt enim sed optio eos a aspernatur ipsum dolorum maiores ea molestiae, eius dolore fugit nam, ad repellat placeat repellendus id mollitia! Laborum explicabo magnam possimus nihil vitae eius quidem, fuga exercitationem, officiis nostrum repellat iure esse tempora quae animi, facere aliquam molestias reiciendis eum? Harum asperiores ipsum minima, a illo eligendi officia nihil molestias vel repudiandae dolorem, sit aliquid facere?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, praesentium. Earum minima eos voluptate ipsam fuga natus minus dolores commodi fugit? Nostrum quo nulla tenetur veniam, molestias placeat voluptatem temporibus!
                Rem et doloremque deserunt consectetur. Quaerat iusto nesciunt sit sunt a atque. Illum, minima accusantium adipisci pariatur est quisquam distinctio consequatur corrupti amet a voluptatum animi ut veniam exercitationem sint.
                Sint ullam distinctio cum blanditiis quia obcaecati ipsa nostrum rem quis unde officia, quisquam quod dolorem quidem deleniti provident eos recusandae a. Quidem magnam quod deleniti soluta nulla ratione eligendi.
                Facere modi unde sint numquam ipsa odit aliquam veniam a quasi maiores officiis libero beatae, corrupti exercitationem eveniet quas quo. Quas, tempora enim. Animi temporibus neque ad esse, rerum nostrum.
                Minus eius dolorem nesciunt, nemo perspiciatis eligendi ea voluptatem ex rerum sit, soluta sunt. Quibusdam perspiciatis dolore, ipsam alias sunt minus non eos molestias iusto, excepturi quia assumenda. Eos, dolore?
            </p> <br/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium minima et veritatis provident aliquam nemo molestiae, exercitationem ipsum, quas, illo doloribus ipsa itaque? Id, quos deleniti! Nemo quisquam magni facilis.
            Earum optio beatae commodi nostrum, ex itaque rerum praesentium similique aut error repudiandae laborum voluptas quas qui perspiciatis, vel esse modi. Voluptatum, modi dignissimos? Nulla et dolorem ipsam debitis facere?
            Saepe aspernatur nam in enim voluptas nostrum consectetur atque nesciunt ducimus deserunt repudiandae ut quibusdam quo maiores totam doloribus vitae veniam quaerat quos, iste fuga adipisci ratione sapiente tempora. Nihil!
            Maxime laboriosam sed quo provident, enim natus, ratione nostrum facilis non voluptates, labore eveniet aliquam? Adipisci omnis nobis alias esse delectus cupiditate repellat? Saepe commodi reprehenderit perferendis tempora, asperiores eos!
            Corporis mollitia at fugit nisi delectus obcaecati perferendis dolore explicabo reprehenderit. Nisi iste aut illum maiores dicta consectetur, facere mollitia nemo, culpa laudantium alias ut non dolorum! Veniam, necessitatibus voluptate.
            Provident nemo optio qui libero. Necessitatibus, expedita distinctio quo sed id ut earum fuga rerum debitis mollitia ullam odio non! Reprehenderit asperiores, illum tenetur at sit cum officiis repudiandae ipsum.
            Perspiciatis numquam, modi perferendis vero quos nisi aliquam distinctio, asperiores perspiciatis excepturi fugiat tempore aspernatur, alias harum aperiam ducimus, culpa voluptas aut veniam sunt assumenda quaerat quis iusto odit praesentium! Officiis.
            Rem eveniet autem iste quae accusamus quis eius alias commodi itaque animi dolor, repellat, minima ducimus qui unde perspiciatis consectetur dignissimos, officiis a eaque voluptatum deserunt placeat reprehenderit dolore. Dicta.</p>
            </section>
        </div>
    )
}