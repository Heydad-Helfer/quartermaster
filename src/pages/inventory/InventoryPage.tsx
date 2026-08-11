import InventoryTable from "#/features/inventory-table/InventoryTable";

export default function InventoryPage() {
	return (
		<section className="inventory-page">
			<header className="inventory-page__head">
				<div>
					<h1 className="inventory-page__title">Inventory</h1>
					<p className="inventory-page__subtitle">
						A ledger of arms, relics, and provisions in your keeping.
					</p>
				</div>
				<button type="button" className="inventory-page__action">
					Add Item
				</button>
			</header>

			<InventoryTable />
		</section>
	);
}
