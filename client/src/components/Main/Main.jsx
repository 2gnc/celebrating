import React from 'react';
import './Main.css';

export default class Main extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            rows: 0
        }
    }
    componentDidMount = () => {
        this.setState({
            rows: getRowsCount()
        })
    }
    render() {
        return (
            <div className='main'>
                <div className='main__row-count'>
                    {getRows(this.state.rows)}
                </div>
                <div className='main__content'>

                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea ullam non, explicabo soluta maxime, reprehenderit at quis consequatur magni atque ut labore, ab est quas tempora voluptates! Magnam repellat assumenda aperiam nemo, doloremque, accusamus aliquam ab, harum deleniti amet culpa? Molestias fugit sed nobis modi possimus quidem, voluptate quibusdam optio nostrum aspernatur velit, fugiat consectetur est hic amet, soluta doloremque eius sapiente iusto corporis voluptatibus delectus vel! Praesentium vero repellendus sequi asperiores placeat dicta voluptas in, deleniti officiis facere tenetur animi veritatis, aliquid ut ex. Asperiores consequuntur quia fugiat laborum tenetur vitae quidem deleniti, blanditiis tempore. Illo debitis dolorem ex magnam error nemo. Mollitia iure similique optio id, laboriosam architecto quia ex modi nisi rerum veniam libero tenetur quo obcaecati aspernatur, excepturi odit! Aperiam consequuntur rerum qui facere nam nemo voluptatem iste dolores sunt ex nostrum recusandae labore eligendi cum ipsa, tempore quo vel adipisci. Quam excepturi voluptatum corrupti nesciunt, consequatur omnis, doloribus non veniam eaque itaque molestias nihil voluptate beatae repudiandae? Modi aliquid porro repudiandae voluptas numquam autem illo nam delectus libero. Distinctio culpa voluptatem numquam dolorum ipsa nobis unde neque. Recusandae id expedita voluptates unde consequatur a eius esse iure provident nam corrupti dolorem facilis, aut accusamus ipsam doloremque beatae nihil officiis dolores pariatur repellendus. Reprehenderit sed dolor ipsum tempora. Ab impedit praesentium quae consectetur, voluptas a assumenda nobis. Culpa maxime, consequatur, nemo est dolorem harum in reprehenderit aperiam nostrum earum fugit molestiae sed a consectetur. Veritatis tempora voluptate aliquid, doloremque quidem perferendis reiciendis excepturi quam, molestiae nobis perspiciatis vitae aperiam eum sed repudiandae vero totam facilis! Porro sed adipisci in aspernatur minus, odio voluptatibus sunt, fugiat ratione, asperiores quod dignissimos cumque sint? Vero consequatur eaque eius sunt ipsam corrupti dolorum ad nihil magni! Enim sit sequi soluta corporis doloremque omnis. Qui provident ipsam laboriosam placeat consectetur, sit incidunt minima tenetur adipisci suscipit doloremque dolores expedita maxime beatae praesentium saepe repellat quod. Quidem animi ab architecto ut magnam in! Eligendi error cupiditate dolore, quia fugit nobis unde culpa reiciendis laborum perferendis animi dignissimos quaerat earum perspiciatis commodi velit optio nulla! Reiciendis dicta ducimus possimus repudiandae itaque illo voluptatibus molestiae a cupiditate ipsum. Officia, praesentium perferendis ex exercitationem nihil dolores quasi deleniti atque nobis sunt quo ab earum, velit, ducimus recusandae mollitia magnam quidem animi sint maiores ipsam aliquid! Exercitationem, quasi. Delectus, excepturi ipsum. Delectus accusantium saepe, asperiores molestias facilis perspiciatis eos officiis eum cupiditate nihil nostrum veniam quos maxime dolorem harum quas architecto doloremque autem obcaecati. Aut ut dolores numquam officia! Atque hic odit delectus, tenetur culpa modi repudiandae? Perferendis alias deserunt amet excepturi quis porro cumque illum repellendus. Maxime quae eos ipsa aut blanditiis nulla voluptatem a ea distinctio, vel earum commodi tempore odio dignissimos numquam consequatur eum praesentium natus dolorum, saepe est tenetur eligendi. Porro modi vero quibusdam consectetur corrupti ipsum delectus eos similique, excepturi ea reprehenderit unde, dicta nostrum maiores nisi ducimus molestiae atque a ad, dignissimos dolorem. Nihil eaque, dolorem rem eligendi hic exercitationem minus harum sed ad recusandae saepe non fugiat, impedit, maiores modi corrupti ipsum qui magnam omnis amet. Officia temporibus, odio beatae aut distinctio ipsa accusamus labore ducimus sint natus quos tempore at nostrum laudantium maxime ea laborum dicta saepe dignissimos? Harum provident molestiae cupiditate labore reprehenderit deleniti sit placeat ratione, pariatur unde? Eveniet sed similique molestias, esse culpa iure architecto dolorum doloremque temporibus beatae expedita assumenda sunt nesciunt eius officiis aliquid. Saepe sit nisi pariatur, nesciunt, obcaecati velit explicabo esse ipsam repellat distinctio quas? Dolores maxime harum ullam eligendi blanditiis esse odit velit? Ipsa, vitae! Rerum nobis ducimus excepturi beatae omnis? Perferendis molestiae voluptatem sit iusto minus dolor laudantium beatae hic? Dignissimos rerum repellat sit doloremque nulla veritatis, natus commodi quis corporis. Ab, explicabo nemo culpa recusandae nulla, alias rerum reiciendis commodi aliquid tempora eveniet fugit corrupti perspiciatis beatae consectetur, magnam laboriosam magni iure veritatis assumenda! Ipsam beatae eum impedit quas, dolore earum est vel consequatur ducimus similique laborum optio aliquid maiores veniam iure doloremque aliquam recusandae cum dicta quae. Laudantium exercitationem consequatur nam iusto, corrupti commodi rem nulla fugiat repudiandae iure numquam libero magni ad tenetur mollitia, ducimus fuga maxime esse ut eum non dignissimos fugit id est. Quidem vitae voluptatem velit dolor illo ea debitis quos, aperiam ipsa modi fugiat! Molestias, unde? Sed laborum quam molestias tenetur dolorem, minima ab natus odit consequatur autem doloremque deleniti similique perferendis fugiat delectus commodi in eveniet distinctio. Porro eum amet ratione corporis nemo. Excepturi, natus et reprehenderit minima ad corporis sequi eligendi dolorum officia blanditiis neque itaque similique fuga voluptas eaque cum, cupiditate in, vel cumque commodi nemo suscipit? Nihil, vel vero nesciunt rerum libero a consequatur et blanditiis ipsa porro magnam maxime in quis quasi culpa maiores doloribus dolore aliquid obcaecati debitis id dolorum suscipit magni? Minus excepturi cumque similique molestias eius quisquam perspiciatis odit soluta ex numquam eveniet, suscipit alias reprehenderit, sint quidem unde optio quis! Officiis molestias quis adipisci quo deserunt doloribus eum, labore minima maxime laudantium doloremque consectetur amet at cumque iure a illo. Modi nostrum illum voluptatum quod, reiciendis, minima recusandae autem voluptates impedit explicabo pariatur totam laboriosam molestias, aut alias dicta vel neque et ex dignissimos adipisci. In tempore ea, cupiditate culpa voluptates odit exercitationem voluptatibus pariatur nihil obcaecati laboriosam delectus vel temporibus eligendi repellat. Incidunt consectetur illo commodi natus. Temporibus ipsa facere alias, est ab voluptatum accusantium soluta. Laborum neque mollitia iste labore rem, ullam illo voluptatum nobis saepe veritatis numquam dolorum corrupti alias magnam exercitationem consequatur hic dicta eaque, quaerat perferendis illum praesentium! Quaerat velit commodi totam ea ipsa esse, tempore adipisci a quas, architecto optio tempora impedit. Odio cum, sunt libero praesentium quibusdam molestiae ad aut. Iure neque sint fugiat tempore culpa, explicabo ipsa recusandae, sit dignissimos nihil consequatur odio aliquam doloribus voluptatibus. Perspiciatis aperiam in facilis numquam commodi atque amet suscipit assumenda? Cumque, veniam ut odit accusantium reiciendis dignissimos nobis sequi fugiat voluptatibus temporibus optio rem numquam delectus quas et, repudiandae beatae maiores quod qui libero at error tempora debitis eaque? Magni iusto at, repellat necessitatibus laudantium alias hic in libero?
                </div>

            </div>
        )
    }
};

function getRows(num) {
    const elements = [];
    for (let i = 1; i <= num; i++) {
        elements.push(<div key={i}>{i}</div>)
    };
    return elements;
}

function getRowsCount() {
    const el = document.querySelector('.main');
    const areaHeight = el.offsetHeight;
    const areaLineHeight = parseInt(/[0-9]+/.exec(window.getComputedStyle(el).lineHeight)[0], 10);
    return Math.floor(areaHeight / areaLineHeight);
}
