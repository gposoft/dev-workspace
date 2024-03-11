CREATE OR REPLACE FUNCTION products.create( 
    dataset jsonb 
)  
 RETURNS jsonb
LANGUAGE plpgsql  
AS  
$$  
    declare 
		register record;
	
		rcnews record;
		result record;
	BEGIN  
	
		SELECT         
			value->>'id'               as product_id,
			value->>'code'             as code,
			value->>'name'             as name,
		   (value->>'price')::numeric  as price,
			value->>'description'      as description,
		    value->>'sort'             as sort
		INTO register
		FROM jsonb_each(dataset);
	
	   WITH dsrows AS ( 
		INSERT INTO products.product(
			        product_id, 
			        code,
			        name,
			        price, 
			        description, 
			        sort)
			VALUES(
				    register.product_id, 
				    register.code, 
				    register.name, 
					register.price, 
				    register.description, 
				    register.sort
			      )
		    RETURNING *)
					
		    select ds.product_id as id, 
			       ds.code,  
				   ds.name,
				   ds.price,
				   ds.description, 
				   ds.sort
			INTO result
			FROM dsrows AS ds;
			
        return to_jsonb(result);
    END  
$$; 


CREATE OR REPLACE FUNCTION providers.product_create(
    dataset jsonb
)
RETURNS jsonb
LANGUAGE plpgsql
AS
$$
DECLARE
    result jsonb;
BEGIN

    --logica  
    result := products.create(dataset);

	--logica 
    RETURN result;
END
$$;



