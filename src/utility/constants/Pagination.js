export const filterParamters = { org_id: "org" };

export const filterAttributes = ["org_id"];

export const defaultFilterData = {
  tags: {
    title: "Tag name",
    name: "tags",
    items: [],
  },
};

export const defaultActiveFilterItem = {
  org_id: [],
};

export const filterTitles = {
  tags: "Tags",
  display_name: "Display Name",
  org_id: "Organization",
};

export const generateFilterObject = filterData => {
  const filterObject = [];
  const filter = { filter: [] };
  filter.filter = Object.entries(filterData).map(([attribute, values]) => {
    const filterCondition = { filter_condition: { attr: attribute, operator: "IN", value: [] } };
    filterCondition.filter_condition.value = values.map(value => value);
    return filterCondition;
  });
  filterObject.push(filter);
  return filterObject;
};

export const sortByCategories = [{ value: "display_name", label: "Featured" }];

export const defaultPaginationParameters = {
  q: "",
  limit: 10,
  offset: 0,
  total_count: 0,
};

export const defaultFilterParameters = {
  s: "all",
};

export const defaultSortParameters = {
  sort_by: "display_name",
  order_by: "desc",
};

export const defaultListingConfig = {
  ...defaultPaginationParameters,
  ...defaultFilterParameters,
  ...defaultSortParameters,
};
