export default function Marketinglayout({
  children,
  team,
  marketing,
  notification,
  login
}: {
  children: React.ReactNode
  team: React.ReactNode
  marketing: React.ReactNode
  notification: React.ReactNode
  login: React.ReactNode
}) {

  const isLoggedIn = false;

  if (isLoggedIn) return (
    <div>
        {children}
        <div className="grid grid-cols-2">
          <div className="p-20 m-3 border border-slate-400 flex items-center justify-center">{team}</div>
          <div className="p-20 m-3 border border-slate-400 flex items-center justify-center">{marketing}</div>
          <div className="p-20 m-3 border border-slate-400 flex items-center justify-center">{notification}</div>
        </div>
      </div>
  )

  return (
  <div className="p-20 m-3 border border-slate-400 flex items-center justify-center">{login}</div>
  )

}
