import './navbar.css'

export default function NavBar() {
    const navigation = [
        { name: 'Home', href: '#' },
        { name: 'Services', href: '#' },
        { name: 'Case Study', href: '#' },
        { name: 'Our Blogs', href: '#' },
        { name: 'Contact Us', href: '#' },
    ];

    return (
        <nav className="w-full bg-[#000724]">
            <div className="flex items-center justify-between px-8 h-[80px]">
                <div className="flex w-150px sm:w-[220px]">
                    <img className="h-[74px] w-[210px] cursor-pointer" src="/assets/logo.svg" alt="Workflow" />
                </div>
                
                <div className="hidden lg:flex gap-8">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-white hover:text-[#09f] font-urbanist navigation-text"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                <div className="flex gap-4">
                    <button className="hidden lg:block w-36 h-10 rounded-md bg-[#0099FF] text-white font-urbanist text-sm lg:text-[16px] hover:bg-[#007ACC] hover:scale-105 hover:shadow-lg transition-all duration-300">
                        Get A Quote
                    </button>
                    <button className="hidden xl:block w-36 h-10 rounded-md bg-[#0099FF] text-white font-urbanist text-sm lg:text-[16px] hover:bg-[#007ACC] hover:scale-105 hover:shadow-lg transition-all duration-300">
                        Schedule A Call
                    </button>
                </div>
            </div>
        </nav>
    );
}
