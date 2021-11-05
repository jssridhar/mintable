function TicketsDropdown({ options, onChange, selectedTicket }) {
    if (options.length === 0) {
        return 'No tickets. Please buy some to raffle and test your luck!';
    }

    return (
        <select onChange={(evt) => {
            onChange(options.find(option => option.type === evt.target.value));
        }} value={selectedTicket.type}>
            {options.map((option, oi) => {
                const optionProps = {
                    value: option.type
                };
                if (option.count === 0) {
                    optionProps.disabled = true;
                }
                return (
                    <option key={oi} {...optionProps}>
                        {option.label} ({option.count})
                    </option>
                );
                })}
        </select>
    );
}

export default TicketsDropdown;