import React, { Component, ReactElement } from 'react';
import { FaHome, FaCar, FaMobile} from 'react-icons/fa';
import Title from './Title';

interface Service {
    icon: ReactElement | string;
    title: string;
    info: string;
}

interface IStateServices {
    services: Service[];
}

export default class Services extends Component<{}, IStateServices> {

    public readonly state: Readonly<IStateServices> = {
        services: [
            {
                icon: <FaCar />,
                title: "auto insurance",
                info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            },
            {
                icon: <FaHome />,
                title: "home insurance",
                info: " Lorem It was popularised in the 1960s with the release of Letraset sheets containing."
            },
            {
                icon: <FaMobile />,
                title: "Electronics insurance",
                info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            }
        ]
    }

    render(): ReactElement {
        const { services } = this.state;
        return (
            <section className="services">
                <Title title="Our insurances" />
                <div className="services-center">
                    {services.map((item: Service, index: number) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
        )
    }
}
