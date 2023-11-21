export const Address = ({ first, second, third, fourth }) => {
  return (
    <div>
      <ul className="flex flex-col gap-y-3 md:gap-y-4">
        <li>
          <a href="#">{first}</a>
        </li>
        <li>
          <a href="#">{second}</a>
        </li>
        <li>
          <a href="#">{third}</a>
        </li>
        {fourth && (
          <li>
            <a href="#">{fourth}</a>
          </li>
        )}
      </ul>
    </div>
  );
};
