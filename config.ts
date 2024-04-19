// Types
type IConfig = {
  decimals: number;
  airdrop: Record<string, number>;
};

// Config from generator
const config: IConfig = {
  decimals: 18,
  airdrop: {      
      "0xC6387E937Bcef8De3334f80EDC623275d42457ff": 5.98499999988
  },
};

// Export config
export default config;
