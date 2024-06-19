import homecardbg from '../../assets/img/homecardbg.jpg'

const NewsHeader = () => {
  return (
    <div className="bg-amber-100 p-[5%] flex flex-col md:flex-row justify-between sm:gap-5 gap-5">
      <div className="flex flex-col justify-between gap-3 md:w-1/2 w-full">
        <h1 className="md:text-4xl text-2xl font-extrabold md:w-3/4">
          Our goal is to provide inclusive care for children with special needs
        </h1>
        <p className="md:w-3/4">
          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
        </p>
        <div className="w-full flex flex-col gap-3">
          <button className="w-32 py-2 rounded-sm bg-yellow-400 hover:bg-yellow-500 font-bold duration-300">Read more</button>
        </div>
      </div>
      <div className="bg-white rounded-lg md:w-1/2 border flex flex-col p-3 gap-3 w-full">
        <div className="flex gap-2 items-center">
          <img src={homecardbg} alt="" className='h-24 w-24 rounded-lg' />
          <div>
            <div className='mb-1'>
              <h2 className="text-lg font-bold">Autism care day</h2>
              <p className='text-xs font-semibold text-slate-600'>15th Nov 2022</p>
            </div>
            <p className='text-sm font-medium text-slate-600'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim
            </p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <img src={homecardbg} alt="" className='h-24 w-24 rounded-lg' />
          <div>
            <div className='mb-1'>
              <h2 className="text-lg font-bold">Autism care day</h2>
              <p className='text-xs font-semibold text-slate-600'>15th Nov 2022</p>
            </div>
            <p className='text-sm font-medium text-slate-600'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim
            </p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <img src={homecardbg} alt="" className='h-24 w-24 rounded-lg' />
          <div>
            <div className='mb-1'>
              <h2 className="text-lg font-bold">Autism care day</h2>
              <p className='text-xs font-semibold text-slate-600'>15th Nov 2022</p>
            </div>
            <p className='text-sm font-medium text-slate-600'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsHeader